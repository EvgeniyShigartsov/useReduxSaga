import { createStore, applyMiddleware, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga'
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly'
import { MODULE_NAME as postsModule, reducer as postsReducer } from './posts/reducer'
import { rootSaga } from './rootSaga'

const rootReducer = combineReducers({
  [postsModule]: postsReducer
})

export const saga = createSagaMiddleware()
export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(saga)))
saga.run(rootSaga)