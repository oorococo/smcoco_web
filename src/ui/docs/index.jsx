// @flow
import React from 'react'
import { Route, Link } from 'react-router-dom'

import Home from './pages/home.jsx'
import Style from './style'
import Component from './components'

const Docs = () => (
    <div>
        <div className="navbar">
            <div className="ctn">
                <ul className="nav">
                    <li>
                        <Link to="/"><i className="fa fa-home" />Home</Link>
                    </li>
                    <li>
                        <Link to="/"><i className="fa fa-home" />Guide</Link>
                    </li>
                    <li>
                        <Link to="/style"><i className="fa fa-sign-language" />Style</Link>
                    </li>
                    <li>
                        <Link to="/components"><i className="fa fa-first-order" />components</Link>
                    </li>
                    <li>
                        <Link to="/components"><i className="fa fa-cut" />Customize</Link>
                    </li>
                </ul>
                <ul className="nav">
                    <li>
                        <Link to="/"><i className="fa fa-github" />Github</Link>
                    </li>
                    <li>
                        <Link to="/style"><i className="fa fa-empire" />About</Link>
                    </li>
                </ul>
            </div>
        </div>
        <div className="dd-lg" />
        <div className="ctn">
            <Route path="/style" component={Style} />
            <Route path="/components" component={Component} />
            <Route exact path="/" component={Home} />
        </div>
    </div>
)


export default Docs
