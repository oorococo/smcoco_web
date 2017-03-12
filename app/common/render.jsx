// @flow
import React from 'react'
import { renderToString } from 'react-dom/server'

import conf from '../conf/conf'
import Root from './Root'

type Param = {
    entry: string,
    location: string,
    component: any,
    state: any,
    title: string,
    style: string,
}

const { env, publicPath, resourcesPath } = conf
const isDevelopment = env === 'development'

export default (param: Param) => {
    const { location, component, state, entry, title, style } = param
    const content = renderToString(<Root location={location} component={component} state={state} />)

    return `<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>${title}</title>
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <link href="//${resourcesPath}/normalize/5.0.0/normalize.min.css" rel="stylesheet" />
    <link href="//${resourcesPath}/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" />
    <link href="//${resourcesPath}/highlight.js/9.9.0/styles/default.min.css" rel="stylesheet" />
    ${isDevelopment ? '<!--' : ''}
    <link rel="stylesheet" href="//${publicPath}/static/assets/common/common.css">
    <link rel="stylesheet" href="//${publicPath}/static/assets/${entry}/${entry}.css">
    ${isDevelopment ? '-->' : ''}
    <style>${style}</style>
</head>
<body>
    <div id="root">${content}</div>
</body>
<script>window.__PRELOADED_STATE__ = ${JSON.stringify(state)}</script>
<script src="//${resourcesPath}/axios/0.15.3/axios.min.js"></script>

<script src="//${resourcesPath}/react/15.4.2/react.min.js"></script>
<script src="//${resourcesPath}/react/15.4.2/react-dom.min.js"></script>

<script src="//${publicPath}/static/resources/react-router-dom/4.0.0-beta.7/react-router-dom.min.js"></script>

<script src="//${resourcesPath}/redux/3.6.0/redux.min.js"></script>
<script src="//${resourcesPath}/react-redux/5.0.1/react-redux.min.js"></script>

<script src="//${resourcesPath}/seamless-immutable/7.0.1/seamless-immutable.production.min.js"></script>



<script src="//${resourcesPath}/highlight.js/9.9.0/highlight.min.js"></script>

<script src="//${publicPath}/static/assets/common/common.js"></script>
<script src="//${publicPath}/static/assets/${entry}/${entry}.js"></script>
</html>
`
}
