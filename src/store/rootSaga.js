import { all, fork } from 'redux-saga/effects'
import { sagaWatcher } from './posts/actions'

export function* rootSaga() {
  const test2 = yield all([
    fork(sagaWatcher)
  ])
  console.log(test2)
}