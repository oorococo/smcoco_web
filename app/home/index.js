import express from 'express'

import render from '../common/render'
import Root from '../../src/home/Root'

const app = express()

app.get('*', (req, res) => {
    res.send(render({
        entry: 'home',
        location: req.url,
        component: Root,
        state: {},
        title: '首页',
        style: '',
    }))
})

export default app
