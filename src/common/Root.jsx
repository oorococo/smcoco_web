// @flow
import React, { PureComponent } from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import createStore from './store/createStore'

const state = window.__PRELOADED_STATE__ ? window.__PRELOADED_STATE__ : {} // eslint-disable-line
const store = createStore(state)

type Props = {
    component: any,
}

class Root extends PureComponent {
    props: Props

    render() {
        const { component: Component } = this.props
        return (
            <Provider store={store}>
                <BrowserRouter>
                    <Component />
                </BrowserRouter>
            </Provider>
        )
    }
}

export default Root
