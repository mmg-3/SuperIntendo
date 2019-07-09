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
    return (
      <div>
        <h2>No news...</h2>
        <NewsNew />
      </div>
    )
  }
  return (
    <div>
      <NewsNew />
      <br />
      <div className="columns is-three-quarters-mobile">
        {props.news.map(news => <NewsPost key={news.id} {...news} />)}
      </div>
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
