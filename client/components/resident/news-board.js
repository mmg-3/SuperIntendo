import React from 'react'
import {PostItem} from './news-post-item'

export const NewsBoard = props => {
  return (
    <div>
      {props.news.map(post => {
        return <PostItem />
      })}
    </div>
  )
}
