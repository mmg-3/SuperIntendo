import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import {getABuilding, updateNews} from '../../store/owner'

export const News = props => {
  useEffect(() => {
    props.getABuilding(props.match.params.id)
  }, [])
  if (!props.id) {
    return <div>Loading...</div>
  }

  const allNews = props.news
  return (
    <div>
      <h2>{props.address} News</h2>
      <h3>Pending News To Approve</h3>
      <ul>
        {allNews.filter(news => news.status === 'pending').map(news => (
          <li key={news.id}>
            <h5>
              {news.title}
              <button
                type="button"
                onClick={() => props.approveNews(news.id, props.id)}
              >
                Approve
              </button>
              <button
                type="button"
                onClick={() => props.denyNews(news.id, props.id)}
              >
                Reject
              </button>
            </h5>
            <sub>{news.body}</sub>
          </li>
        ))}
      </ul>
    </div>
  )
}

const mapStateToProps = state => ({
  ...state.owner.selectedBuilding
})

const mapDispatchToProps = dispatch => ({
  getABuilding: id => dispatch(getABuilding(id)),
  approveNews: (newsId, buildId) =>
    dispatch(updateNews(newsId, buildId, 'approve')),
  denyNews: (newsId, buildId) => dispatch(updateNews(newsId, buildId, 'deny'))
})

export default connect(mapStateToProps, mapDispatchToProps)(News)
