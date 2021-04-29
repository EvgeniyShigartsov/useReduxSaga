/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { GET_POSTS } from '../../store/posts/actionType'
import { isPostsLoadingSelector, postsSelector } from '../../store/posts/selectors'
import { Post } from '../Post/post'

export const Posts = () => {
  const posts = useSelector(postsSelector)
  const isLoading = useSelector(isPostsLoadingSelector)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch({type: GET_POSTS})
  }, [dispatch])

  if (isLoading) return <h2>Loading...</h2>
  return (
    <ul style={{marginTop: 50}}>
      {posts.map(({name, created}, index) => (
        <Post
          key={created}
          name={name}
          index={index + 1}
        />
      ))}
    </ul>
  )
}
