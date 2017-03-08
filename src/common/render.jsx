// @flow
import React from 'react'
import { render } from 'react-dom'

import './scss/index.scss'

import Root from './Root'

const root = document.getElementById('root')

export default (component: any) => {
    render(<Root component={component} />, root)
}
