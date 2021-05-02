import { fork } from 'redux-saga/effects'
import { sagaWatcher } from './posts/actions'

export function* rootSaga() {
  yield fork(sagaWatcher)
}