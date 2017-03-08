const fs = require('fs')
const path = require('path')
const inquirer = require('inquirer')
const webpack = require('webpack')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

const conf = require('../app/conf/conf')

const { env, host, port, publicPath } = conf
const webpackPort = port + 1

const src = path.resolve(__dirname, '../')
const dst = path.resolve(__dirname, '../build')

// const entriesPromise = inquirer.prompt([{
//     type: 'checkbox',
//     message: '请选择需要启动的子项目:',
//     name: 'entries',
//     choices: entryNames.map(v => ({ name: v })),
//     validate: v => v.length < 1 ? '你至少应该选择一项' : true,
// }])

module.exports = async() => {
    const webpackConf = {
        entry: {
            main: [`${src}/app/main.js`],
        },
        node: { __filename: true, __dirname: true },
        context: `${src}`,
        target: 'node',
        performance: { hints: false },
        resolve: { extensions: ['.js', '.jsx'] },
        output: { publicPath: `//${publicPath}/static/assets/`, filename: '[name].js', path: dst },
        module: {
            rules: [{
                include: src,
                test: /\.jsx?$/,
                use: [{ loader: 'babel-loader', options: { presets: [['env', { modules: false }], 'stage-0', 'react'] } }],
            }],
        },
        plugins: [new webpack.DefinePlugin({ 'process.env.NODE_ENV': JSON.stringify(env || 'production'), }),],
    }
    return webpackConf
}
