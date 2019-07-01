import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {getABuilding} from '../../store/owner'

export const SingleBuilding = props => {
  useEffect(() => {
    // console.log(props)
    props.getABuilding(props.match.params.id)
  }, [])

  if (!props.id) {
    return <div>Loading...</div>
  }
  const tickets = props.apartments
    .flatMap(apartment => apartment.tickets)
    .filter(ticket => ['pending', 'confirmed'].includes(ticket.status))
  const residents = props.apartments.flatMap(apartment => apartment.residents)
  const numVacant = props.apartments.filter(apt => !apt.occupied).length

  return (
    <div>
      <div>
        {props.address} - {numVacant} vacant apartment(s)
      </div>
      <div className="ticket-container">
        <div>
          <Link to={`/buildings/${props.id}/tickets`}>Tickets</Link>:
        </div>
        <div>
          <ul>
            {tickets.map(ticket => (
              <li key={ticket.id}>
                {ticket.status} - #{ticket.id} {ticket.issue}@{ticket.location}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <Link to={`/buildings/${props.id}/news`}>News</Link>:
        </div>
        <div>
          <ul>
            {props.news.map(news => (
              <li key={news.id}>
                {news.title} - {news.body}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <Link to={`/buildings/${props.id}/residents`}>Residents</Link>:
        </div>
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
