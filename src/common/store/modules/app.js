// ------------------------------------
// Constants
// ------------------------------------
export const LOADING = 'LOADING'
export const LOADED = 'LOADED'
export const ERROR = 'ERROR'
export const ERROR_HIDE = 'ERROR_HIDE'

// ------------------------------------
// @actions
// ------------------------------------
export const loading = () => ({
    type: LOADING,
})

export const loaded = () => ({
    type: LOADED,
})

let errorTimer

export const errorHide = () => ({
    type: ERROR_HIDE,
})

export const error = msg => dispatch => {
    dispatch({
        type: ERROR,
        payload: msg,
    })

    if (errorTimer) {
        clearTimeout(errorTimer)
    }

    errorTimer = setTimeout(() => {
        dispatch(errorHide())
        errorTimer = false
    }, 5000)
}

// -----------------------------
// @reducer
// -----------------------------
export default () => ({})
