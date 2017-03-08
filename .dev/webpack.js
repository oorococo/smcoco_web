const fs = require('fs')
const path = require('path')
const inquirer = require('inquirer')
const webpack = require('webpack')

const ExtractTextPlugin = require('extract-text-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

const conf = require('../app/conf/conf')

const { env, host, port, publicPath } = conf
const webpackPort = port + 1

const src = path.resolve(__dirname, '../src')
const dst = path.resolve(__dirname, '../public/static/assets')
const lib = path.resolve(__dirname, '../node_modules')

const entryNames = fs.readdirSync(src).filter(v => v !== 'common')

const entriesPromise = env === 'development' ?
    inquirer.prompt([{
        type: 'checkbox',
        message: '请选择需要启动的子项目:',
        name: 'entries',
        choices: entryNames.map(v => ({ name: v })),
        validate: v => v.length < 1 ? '你至少应该选择一项' : true,
    }]) : { entries: entryNames }

module.exports = async() => {
    const entries = (await entriesPromise).entries
    const entry = {}

    for (let i = 0; i < entries.length; i += 1) { entry[entries[i]] = [`${src}/${entries[i]}/index.jsx`] }
    entry.common = ['regenerator-runtime/runtime', `${src}/common/render.jsx`,]

    const webpackConf = {
        entry,
        context: `${src}`,
        performance: { hints: false },
        resolve: { extensions: ['.js', '.jsx', '.css', '.scss'] },
        output: { publicPath: `//${publicPath}/static/assets/`, filename: '[name]/[name].js', path: dst },
        externals: {
            react: 'React',
            'react-dom': 'ReactDOM',
            'react-router-dom': 'ReactRouterDOM',
            redux: 'Redux',
            'react-redux': 'ReactRedux',
        },
        module: {
            rules: [{
                include: src,
                test: /\.s?css$/,
                use: env === 'development' ?
                    [{ loader: 'style-loader' }, { loader: 'css-loader', options: { sourceMap: true } }, { loader: 'sass-loader', options: { sourceMap: true } }] :
                    ExtractTextPlugin.extract({
                        fallback: 'style-loader',
                        use: ['css-loader', 'sass-loader'],
                    })
            }, {
                include: src,
                test: /\.jsx?$/,
                use: [{ loader: 'babel-loader', options: { presets: [['env', { modules: false }], 'stage-0', 'react'] } }],
            }, {
                include: src,
                test: /\.(ico|png|jpg|jpeg|gif|eot|ttf|svg|woff|woff2)(\?[a-z0-9A-Z]*)?$/,
                use: [{ loader: 'url-loader', options: { name: '[name].[ext]' } }],
            }],
        },
        plugins: [
            new webpack.NamedModulesPlugin(),
            new webpack.DefinePlugin({ 'process.env.NODE_ENV': JSON.stringify(env || 'development'), }),
            new webpack.optimize.CommonsChunkPlugin({ name: 'common', filename: '[name]/[name].js', minChunks: Infinity }),
        ],
    }

    if (env === 'development') {
        webpackConf.devtool = 'eval-cheap-module-source-map'
        webpackConf.devServer = {
            port: webpackPort,
            compress: true,
            historyApiFallback: { disableDotRule: true },
            proxy: { '/': { target: `http://${host}:${port}/`, secure: false } }
        }
    }
    if (env === 'production') {
        webpackConf.plugins.push(new BundleAnalyzerPlugin())
        webpackConf.plugins.push(new ExtractTextPlugin('[name]/[name].css'))
    }

    return webpackConf
}
