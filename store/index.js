import { createStore, applyMiddleware } from 'redux'

import reducer from './reducers'
import { thunk } from './middlewares'

const store = createStore(
  reducer,
  /* preloadedState, */
  applyMiddleware(thunk)
);


export default store