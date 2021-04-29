import React from 'react'

export const Post = ({name, index}) => (
  <li>
    <span style={{marginRight: 10}}>
      {index}
      :
    </span>
    <span>{name}</span>
  </li>
)