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
      <div className="body">
        <h3 className="title is-6">
          News Pending Approval{' '}
          <span className="tag is-warning">need action</span>
        </h3>
        <div className="columns is-three-quarters-mobile">
          {allNews.filter(news => news.status === 'pending').map(news => (
            <div key={news.id} className="column">
              <div className="card">
                <div className="card-image">
                  <figure className="image is-4by3">
                    <img src={news.photoUrl} />
                  </figure>
                </div>
                <div className="card-content">
                  <div className="media">
                    <div className="media-content">
                      <p className="title is-5">{news.title}</p>
                      <p className="subtitle is-6">Author:</p>
                    </div>
                  </div>
                  <div className="content">
                    {news.body}
                    <br />
                    <a>Expires: {news.expDay}</a>
                    <br />
                    <button
                      type="button"
                      onClick={() => props.approveNews(props.news.id, props.id)}
                    >
                      Approve
                    </button>
                    <button
                      type="button"
                      onClick={() => props.denyNews(props.news.id, props.id)}
                    >
                      Reject
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
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
