import React, {useEffect} from 'react'
import NewsNew from './news-new'
import {getNewsThunk} from '../../store/resident'
import {connect} from 'react-redux'

const News = props => {
  useEffect(() => {
    props.getNews()
  }, [])
  // if (!props.news.id) {
  //   return <div>Loading...</div>
  // }
  return (
    <div>
      <NewsNew />
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
