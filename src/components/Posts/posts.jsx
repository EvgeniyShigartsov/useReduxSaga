import React from 'react'
import { Post } from '../Post/post'

export const Posts = ({posts}) => (
  <ul style={{marginTop: 50}}>
    {posts.map(({title, id}) => <Post title={title} id={id} />)}
  </ul>
)
