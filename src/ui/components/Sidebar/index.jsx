import React, { PureComponent } from 'react'

export default class Sidebar extends PureComponent {
    render() {
        return (
            <div className="sidebar">
                {this.props.children}
            </div>
        )
    }
}
