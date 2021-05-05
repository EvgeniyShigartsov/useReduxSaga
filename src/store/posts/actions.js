import axios from 'axios'
import {
  all, call, put, takeEvery
} from 'redux-saga/effects'
import {
  GET_POSTS, GET_POSTS_SUCCESS, START_LOADING, STOP_LOADING, HANDLE_CLICK
} from './actionType'

const DOMAIN = 'https://swapi.dev/api'

function* sagaPostWorker() {
  try {
    yield put({type: START_LOADING})
    const { data: { results } } = yield call(() => axios.get(`${DOMAIN}/people`))
    yield put({type: GET_POSTS_SUCCESS, payload: results})
  } catch (error) {
    console.log(error.response || error)
  } finally {
    yield put({type: STOP_LOADING})
  }
}

function* logErrorWorker() {
  console.log("Hello That's an error!")
  yield null
}

export function* sagaWatcher() {
  const test = yield all([
    takeEvery(GET_POSTS, sagaPostWorker),
    takeEvery(HANDLE_CLICK, logErrorWorker)
  ])
  console.log(test)
}
