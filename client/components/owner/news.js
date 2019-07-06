import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import {getABuilding} from '../../store/owner'

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
            <h5>{news.title}</h5>
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
  getABuilding: id => dispatch(getABuilding(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(News)
