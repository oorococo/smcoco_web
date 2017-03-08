// @flow
import render from '../common/render'
import Root from './Root.jsx'

import './index.scss'

render(Root)

if (module.hot) {
    module.hot.accept('./Root.jsx', () => render(Root))
}
