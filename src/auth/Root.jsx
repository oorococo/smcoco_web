// @flow
import React, { PureComponent } from 'react'

type Props = {
    name: number,
}

export default class Root extends PureComponent {
    props: Props

    render() {
        return (
            <div>{this.props.name}dddddddd</div>
        )
    }
}
