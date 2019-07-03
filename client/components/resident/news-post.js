import React from 'react'

export const NewsPost = props => {
  return (
    <div>
      <img src={props.photoUrl[0]} />
      <div>{props.title}</div>
    </div>
  )
}
