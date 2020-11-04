import React from 'react'

import MovieContainer from './src/container/MovieContainer'
import rootSaga from './src/saga/rootSaga'
import allReducers from './src/reducers/index'

import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'

import createSagaMiddleware from 'redux-saga'

const sagaMiddleware = createSagaMiddleware()

let store = createStore(allReducers, applyMiddleware(sagaMiddleware))

const App = () => {
  return (
    <Provider store={store}>
      <MovieContainer />
    </Provider>
  )
}

sagaMiddleware.run(rootSaga)

export default App


