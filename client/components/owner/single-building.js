import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {getABuilding, verifyUser} from '../../store/owner'
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
  const residents = props.apartments
    .map(apartment =>
      apartment.residents.map(resident => ({
        ...resident,
        number: apartment.unitNumber
      }))
    )
    .flat()
  const verifiedResidents = residents.filter(res => res.isVerified).sort()
  const unverifiedResidents = residents.filter(res => !res.isVerified).sort()
  const numVacant = props.apartments.filter(apt => !apt.occupied).length
  console.log(residents)
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
        {unverifiedResidents.length > 0 && (
          <div>
            Unverified Residents
            <ul>
              {unverifiedResidents.map(resident => (
                <li key={resident.id}>
                  {resident.number} - {resident.firstName} {resident.lastName} -{' '}
                  <button
                    type="button"
                    onClick={() => props.verifyUser(props.id, resident.id)}
                  >
                    Verify
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
        {verifiedResidents.length > 0 && (
          <div>
            <div>
              <Link to={`/buildings/${props.id}/residents`}>
                Verified Residents
              </Link>:
            </div>
            <div>
              <ul>
                {verifiedResidents.map(resident => (
                  <li key={resident.id}>
                    {resident.number} - {resident.firstName} {resident.lastName}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  ...state.owner.selectedBuilding
})

const mapDispatchToProps = dispatch => ({
  getABuilding: id => dispatch(getABuilding(id)),
  verifyUser: (bId, rId) => dispatch(verifyUser(bId, rId))
})

export default connect(mapStateToProps, mapDispatchToProps)(SingleBuilding)
