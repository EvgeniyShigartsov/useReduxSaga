import axios from 'axios'
import { call, put, takeEvery } from 'redux-saga/effects'
import {
  GET_POSTS, GET_POSTS_SUCCESS, START_LOADING, STOP_LOADING
} from './actionType'

const DOMAIN = 'https://swapi.dev/api'

function* sagaPostWorker() {
  try {
    yield put({type: START_LOADING})
    const { data: { results } } = yield call(() => axios.get(`${DOMAIN}/people`))
    yield put({type: GET_POSTS_SUCCESS, payload: results})
    yield put({type: STOP_LOADING})
  } catch (error) {
    console.log(error.response || error)
  }
}

export function* sagaWatcher() {
  yield takeEvery(GET_POSTS, sagaPostWorker)
}
