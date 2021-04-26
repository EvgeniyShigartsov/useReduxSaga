import { GET_POSTS } from './actionType'

const initialState = {
  posts: []
}
export const MODULE_NAME = 'MODULE_NAME'

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_POSTS:
      return {
        ...state,
        posts: payload
      }
    default:
      return {...state}
  }
}