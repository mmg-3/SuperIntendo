import React from 'react'

export const NewsPost = props => {
  return (
    <div>
      <img src={props.photoUrl} />
      <div>{props.title}</div>
    </div>
  )
}
