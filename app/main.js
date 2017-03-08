import path from 'path'
import Log from 'log'
import express from 'express'
import compression from 'compression'
import vhost from 'vhost'

import conf from './conf/conf'
import home from './home'
import auth from './auth'

const log = new Log('app')
const app = express()

const { host, port } = conf

app.use(compression())
app.use(vhost(`public.${host}`, express.static(path.resolve(__dirname, '../public'))))
app.use(vhost(`${host}`, home))
app.use(vhost(`auth.${host}`, auth))

app.listen(port, () => {
    log.info(`App is listening ${host}:${port}`)
})
