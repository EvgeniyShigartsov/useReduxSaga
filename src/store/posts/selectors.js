import { MODULE_NAME } from './reducer'

export const postsSelector = (state) => state[MODULE_NAME].posts
export const isPostsLoadingSelector = (state) => state[MODULE_NAME].isLoading