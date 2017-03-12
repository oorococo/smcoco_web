// @flow
import React from 'react'
import { Route, Link } from 'react-router-dom'

import Container from './container.jsx'
import Flex from './flex.jsx'
import Grid from './grid.jsx'
import Button from './button.jsx'
import Table from './table.jsx'
import Image from './image.jsx'
import Popover from './popover.jsx'
import Dropdown from './dropdown.jsx'
import Alert from './alert.jsx'
import Modal from './modal.jsx'
import Progress from './progress.jsx'
import Navbar from './navbar.jsx'
import Sidebar from './sidebar.jsx'
import Offcanvas from './offcanvas.jsx'

const Docs = ({ match }) => (
    <div>
        <div className="ctn">
            <div className="r r-g-md">
                <div className="c-lg-2">
                    <Sidebar>
                        <div><Link to={`${match.url}`}><i className="fa fa-tv" />container</Link></div>
                        <div><Link to={`${match.url}/flex`}><i className="fa fa-indent" />flex</Link></div>
                        <div><Link to={`${match.url}/grid`}><i className="fa fa-th-large" />grid</Link></div>
                        <div><Link to={`${match.url}/button`}><i className="fa fa-hand-o-up" />button</Link></div>
                        <div><Link to={`${match.url}/table`}><i className="fa fa-table" />table</Link></div>
                        <div><Link to={`${match.url}/image`}><i className="fa fa-image" />image</Link></div>
                        <div><Link to={`${match.url}/popover`}><i className="fa fa-caret-square-o-up" />popover</Link>
                        </div>
                        <div><Link to={`${match.url}/dropdown`}><i
                            className="fa fa-caret-square-o-down" />dropdown</Link></div>
                        <div><Link to={`${match.url}/alert`}><i className="fa fa-warning" />alert</Link></div>
                        <div><Link to={`${match.url}/modal`}><i className="fa fa-window-maximize" />modal</Link></div>
                        <div><Link to={`${match.url}/progress`}><i
                            className="fa fa-circle-o-notch fa-spin" />progress</Link>
                        </div>
                        <div><Link to={`${match.url}/navbar`}><i className="fa fa-navicon" />navbar</Link></div>
                        <div><Link to={`${match.url}/offcanvas`}><i className="fa fa-window-restore" />offcanvas</Link>
                        </div>
                    </Sidebar>
                </div>
                <div className="c-lg-10">
                    <Route path={`${match.url}/flex`} component={Flex} />
                    <Route path={`${match.url}/grid`} component={Grid} />
                    <Route path={`${match.url}/button`} component={Button} />
                    <Route path={`${match.url}/table`} component={Table} />
                    <Route path={`${match.url}/image`} component={Image} />
                    <Route path={`${match.url}/popover`} component={Popover} />
                    <Route path={`${match.url}/dropdown`} component={Dropdown} />
                    <Route path={`${match.url}/alert`} component={Alert} />
                    <Route path={`${match.url}/modal`} component={Modal} />
                    <Route path={`${match.url}/progress`} component={Progress} />
                    <Route path={`${match.url}/navbar`} component={Navbar} />
                    <Route path={`${match.url}/offcanvas`} component={Offcanvas} />
                    <Route exact path={`${match.url}`} component={Container} />
                </div>
            </div>
        </div>
    </div>
)


export default Docs
