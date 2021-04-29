import { GET_POSTS_SUCCESS, START_LOADING, STOP_LOADING } from './actionType'

const mockPost = {
  name: 'Some Name',
  created: '1'
}

const initialState = {
  posts: [mockPost],
  isLoading: false
}
export const MODULE_NAME = 'MODULE_NAME'

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_POSTS_SUCCESS:
      return {
        ...state,
        posts: [...state.posts, ...payload]
      }
    case START_LOADING:
      return {
        ...state,
        isLoading: true
      }
    case STOP_LOADING:
      return {
        ...state,
        isLoading: false
      }
    default:
      return {...state}
  }
}