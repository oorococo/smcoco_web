import express from 'express'

import render from '../common/render'
import Root from '../../src/ui/Root'

const app = express()

app.get('*', (req, res) => {
    res.send(render({
        entry: 'ui',
        location: req.url,
        component: Root,
        state: {},
        title: '用户接口',
        style: '',
    }))
})

export default app
