import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'

const rootReducer = combineReducers({
})

// See: https://github.com/cloudmu/react-redux-starter-kit/
export default (initialState = {}) => {
  let store

  if (module.hot) {
    store = createStore(
      rootReducer,
      initialState,
      compose(
        applyMiddleware(thunkMiddleware),
        window.devToolsExtension ? window.devToolsExtension() : f => f
      )
    )
  } else {
    store = createStore(rootReducer, initialState, compose(
      applyMiddleware(thunkMiddleware), f => f
    ))
  }

  return store
}
