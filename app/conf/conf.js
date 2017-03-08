let env
if (process.env.NODE_ENV === 'development') {
    env = 'development'
} else if (process.env.NODE_ENV === 'preview') {
    env = 'preview'
} else if (process.env.NODE_ENV === 'production') {
    env = 'production'
} else {
    env = 'development'
}

const appendPublicPath = conf => Object.assign({}, conf, { publicPath: conf.publicPath || `public.${conf.host}:${conf.port + 1}` })

const development = {
    env,
    host: 'localhost',
    port: 4000,
    resourcesPath: 'cdn.bootcss.com',
}

const preview = Object.assign({}, development, {
    host: 'dev.smcoco.com',
    port: 8000,
    publicPath: 'public.dev.smcoco.com:8000',
})

const production = Object.assign({}, preview, {
    host: 'smcoco.com',
    port: 80,
    publicPath: 'public.smcoco.com',
})

module.exports = appendPublicPath({ development, preview, production }[env])
