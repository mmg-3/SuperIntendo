import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import {
  getTickets,
  updateAssignedTicket,
  updateInProgTicket
} from '../../store/worker'

export const AllTickets = props => {
  useEffect(() => {
    props.getTickets()
  }, [])
  const updateAssigned = evt => {
    evt.preventDefault()
    props.updateAssignedTicket(evt.target.value)
  }
  const updateInProg = evt => {
    evt.preventDefault()
    props.updateInProgTicket(evt.target.value)
  }
  return (
    <div>
      <h3>New Tickets</h3>
      <ul style={{listStyles: 'none'}}>
        {props.tickets
          .filter(ticket => ticket.status === 'assigned')
          .map(ticket => {
            return (
              <li key={ticket.id}>
                {ticket.issue}
                <br />
                {ticket.status}
                <br />
                <button
                  type="submit"
                  onClick={updateAssigned}
                  value={ticket.id}
                >
                  Start
                </button>
              </li>
            )
          })}
      </ul>
      <h3>Current Tickets</h3>
      <ul>
        {props.tickets
          .filter(ticket => ticket.status === 'in-progress')
          .map(ticket => {
            return (
              <li key={ticket.id}>
                {ticket.issue}
                <br />
                {ticket.status}
                <br />
                <button type="submit" value={ticket.id} onClick={updateInProg}>
                  Finish
                </button>
              </li>
            )
          })}
      </ul>
    </div>
  )
}

const mapStateToProps = state => ({
  user: state.user,
  tickets: state.worker.tickets
  // worker: state.worker
})

const mapDispatchToProps = dispatch => ({
  getTickets: () => dispatch(getTickets()),
  updateAssignedTicket: ticketId => dispatch(updateAssignedTicket(ticketId)),
  updateInProgTicket: ticketId => dispatch(updateInProgTicket(ticketId))
})

export default connect(mapStateToProps, mapDispatchToProps)(AllTickets)
