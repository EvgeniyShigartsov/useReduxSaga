import React from 'react'

export const Post = ({title, id}) => (
  <li key={id}>
    <span style={{marginRight: 10}} key={id}>
      {id}
      :
    </span>
    <span>{title}</span>
  </li>
)