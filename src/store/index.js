import { createStore, applyMiddleware, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga'
import { sagaWatcher } from './sagaWatcher';
import { MODULE_NAME as postsModule, reducer as postsReducer } from './posts/reducer'

const rootReducer = combineReducers({
  [postsModule]: postsReducer
})

const saga = createSagaMiddleware()
export const store = createStore(rootReducer, applyMiddleware(saga))
saga.run(sagaWatcher)