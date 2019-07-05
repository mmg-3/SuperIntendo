import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import {getNewsThunk} from '../../store/resident'
import NewsNew from './news-new'
import {NewsPost} from './news-post'

const News = props => {
  useEffect(() => {
    props.getNews()
  }, [])
  if (props.news.length === 0) {
    return <div>Loading...</div>
  }
  return (
    <div>
      <NewsNew />
      {props.news.map(news => <NewsPost key={news.id} {...news} />)}
    </div>
  )
}

const mapStateToProps = state => ({
  news: state.resident.news
})

const mapDispatchToProps = dispatch => ({
  getNews: () => dispatch(getNewsThunk())
})

export default connect(mapStateToProps, mapDispatchToProps)(News)
