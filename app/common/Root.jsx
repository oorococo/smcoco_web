// @flow
import React, { PureComponent } from 'react'
import { Provider } from 'react-redux'
import { StaticRouter } from 'react-router'

import createStore from '../../src/common/store/createStore'

type Props = {
    component: any,
    state: any,
    location: string,
}

const context = {}

export default class Root extends PureComponent {
    props: Props

    render() {
        const { component: Component, state, location } = this.props
        return (
            <Provider store={createStore(state)}>
                <StaticRouter context={context} location={location}>
                    <Component />
                </StaticRouter>
            </Provider>
        )
    }
}
