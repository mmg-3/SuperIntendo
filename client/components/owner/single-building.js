import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import {getABuilding} from '../../store/owner'

export const SingleBuilding = props => {
  useEffect(() => {
    // console.log(props)
    props.getABuilding(props.match.params.id)
  }, [])

  if (!props.id) {
    return <div>Loading...</div>
  }
  const tickets = props.apartments.flatMap(apartment => apartment.tickets)
  const residents = props.apartments.flatMap(apartment => apartment.residents)
  console.log(props)
  return (
    <div>
      <div>{props.address}</div>
      <div className="ticket-container">
        <div>Tickets:</div>
        <div>
          <ul>
            {tickets.map(ticket => (
              <li key={ticket.id}>
                {ticket.issue}@{ticket.location} - {ticket.status}
              </li>
            ))}
          </ul>
        </div>
        <div>News:</div>
        <div>
          <ul>
            {props.news.map(news => (
              <li key={news.id}>
                {news.title} - {news.body}
              </li>
            ))}
          </ul>
        </div>
        <div>Residents:</div>
        <div>
          <ul>
            {residents.map(resident => (
              <li key={resident.id}>
                {resident.firstName} {resident.lastName}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  ...state.owner.selectedBuilding
})

const mapDispatchToProps = dispatch => ({
  getABuilding: id => dispatch(getABuilding(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(SingleBuilding)
