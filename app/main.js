import fs from 'fs'
import path from 'path'
import Log from 'log'
import spdy from 'spdy'
import express from 'express'
import compression from 'compression'
import vhost from 'vhost'

import conf from './conf/conf'
import home from './home'
import auth from './auth'
import ui from './ui'

const log = new Log('app')
const app = express()

const { env, host, port } = conf

app.use(compression())
app.use(vhost(`public.${host}`, express.static(path.resolve(__dirname, '../public'))))
app.use(vhost(`${host}`, home))
app.use(vhost(`auth.${host}`, auth))
app.use(vhost(`ui.${host}`, ui))


app.listen(port, () => {
    log.info(`App is listening ${host}:${port}`)
})

// if (env === 'development') {
//     app.listen(port, () => {
//         log.info(`App is listening ${host}:${port}`)
//     })
// } else {
//     const options = {
//         key: fs.readFileSync(path.resolve(__dirname, '../server.key')),
//         cert: fs.readFileSync(path.resolve(__dirname, '../server.crt')),
//     }
//     spdy.createServer(options, app).listen(port, () => {
//         log.info(`App is listening ${host}:${port}`)
//     })
// }
