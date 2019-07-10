import React from 'react'
import {connect} from 'react-redux'
import {updateNews} from '../../store/owner'
import moment from 'moment'

export const News = props => {
  if (!props.id) {
    return <div>Loading...</div>
  }

  const time = moment(props.news.expDay)

  const allNews = props.news
  return (
    <div>
      <div className="body">
        <h3 className="title is-6">
          News Pending Approval{' '}
          <span className="tag is-warning">need action</span>
        </h3>
        <div className="columns is-three-quarters-mobile">
          <div className="columns">
            {allNews.filter(news => news.status === 'pending').map(news => {
              let author = 'Owner'
              if (news.resident) {
                author = news.resident.firstName + ' ' + news.resident.lastName
              }
              return (
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
                          <p className="subtitle is-6">Author: {author}</p>
                        </div>
                      </div>
                      <div className="content">
                        {news.body}
                        <br />
                        <p className="exp">Expires: {time.fromNow()}</p>
                        <br />
                        <a
                          className="button is-success"
                          onClick={() => props.approveNews(news.id, props.id)}
                        >
                          <span className="icon is-small">
                            <i className="fas fa-check" />
                          </span>
                          <span>Approve</span>
                        </a>

                        <a
                          className="button is-danger is-outlined"
                          onClick={() => props.denyNews(news.id, props.id)}
                        >
                          <span>Reject</span>
                          <span className="icon is-small">
                            <i className="fas fa-times" />
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  ...state.owner.selectedBuilding
})

const mapDispatchToProps = dispatch => ({
  approveNews: (newsId, buildId) =>
    dispatch(updateNews(newsId, buildId, 'approve')),
  denyNews: (newsId, buildId) => dispatch(updateNews(newsId, buildId, 'deny'))
})

export default connect(mapStateToProps, mapDispatchToProps)(News)
