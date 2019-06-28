import React from 'react'
import {Link} from 'react-router-dom'

export const PostItem = props => {
  return (
    <div>
      <img src={props.imageUrl} />
      <h3>{props.date}</h3>
      <h3>{props.title}</h3>
      <Link to="???">
        <button type="button">Read</button>
      </Link>
    </div>
  )
}
