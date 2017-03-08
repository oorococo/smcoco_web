import { applyMiddleware, compose, createStore } from 'redux'
import thunkMiddleware from 'redux-thunk'

import createReducer from './reducers'

export default (initialState = {}) => {
    // ======================================================
    // Middleware Configuration
    // ======================================================
    const middleware = [
        thunkMiddleware,
    ]

    // ======================================================
    // Store Enhancers
    // ======================================================
    const enhancers = []
    if (process.env.NODE_ENV === 'development') {
        // const devToolsExtension = window.devToolsExtension
        // if (typeof devToolsExtension === 'function') {
        // enhancers.push(devToolsExtension())
        // }
    }

    // ======================================================
    // Store Instantiation and HMR Setup
    // ======================================================
    const store = createStore(
        createReducer(),
        initialState,
        compose(
            applyMiddleware(...middleware),
            ...enhancers,
        ),
    )
    store.asyncReducers = {}

    if (module.hot) {
        module.hot.accept('./reducers', () => {
            /* eslint global-require: 0 */
            const reducers = require('./reducers').default
            store.replaceReducer(reducers(store.asyncReducers))
        })
    }

    return store
}
