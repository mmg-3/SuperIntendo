import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import {
  getABuilding,
  getWorkers,
  assignWorker,
  closeTicket
} from '../../store/owner'
import WorkerSelection from './worker-selection'

export const Tickets = props => {
  useEffect(() => {
    props.getWorkers()
    props.getABuilding(props.match.params.id)
  }, [])
  if (!props.id) {
    return <div>Loading...</div>
  }

  const tickets = props.apartments.flatMap(apartment => apartment.tickets)
  return (
    <div>
      <h2>{props.address} Tickets</h2>
      <h3>Pending Tickets To Assign</h3>
      <ul>
        {tickets.filter(ticket => ticket.status === 'pending').map(tix => (
          <li key={tix.id}>
            {tix.issue}
            <br />
            {tix.status}
            <WorkerSelection tixId={tix.id} buildId={props.match.params.id} />
          </li>
        ))}
      </ul>
      <h3>Confirmed Tickets To Close</h3>
      <ul>
        {tickets.filter(ticket => ticket.status === 'confirmed').map(tix => (
          <li key={tix.id}>
            {tix.issue}
            <br />
            {tix.status}
            <button
              type="submit"
              onClick={evt => {
                evt.preventDefault()
                props.closeTicket(tix.id, props.match.params.id)
              }}
            >
              Close Ticket
            </button>
          </li>
        ))}
      </ul>
      <h3>Active Tickets Not Requiring Actions</h3>
      <ul>
        {tickets
          .filter(
            ticket =>
              ticket.status === 'assigned' ||
              ticket.status === 'in-progress' ||
              ticket.status === 'finished'
          )
          .map(tix => (
            <li key={tix.id}>
              {tix.issue} <br /> {tix.status}
            </li>
          ))}
      </ul>
      <h3>Past Tickets</h3>
      <ul>
        {tickets
          .filter(ticket => ticket.status === 'closed')
          .map(tix => <li key={tix.id}>{tix.issue}</li>)}
      </ul>
    </div>
  )
}

const mapStateToProps = state => ({
  ...state.owner.selectedBuilding
})

const mapDispatchToProps = dispatch => ({
  getABuilding: id => dispatch(getABuilding(id)),
  getWorkers: () => dispatch(getWorkers()),
  closeTicket: (tixId, buildId) => dispatch(closeTicket(tixId, buildId))
})

export default connect(mapStateToProps, mapDispatchToProps)(Tickets)
