import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import {getMyTickets, updateInProgTicket} from '../../store/worker'

export const CurrentTickets = props => {
  useEffect(() => {
    props.getMyTickets()
  }, [])

  const updateInProg = evt => {
    evt.preventDefault()
    props.updateInProgTicket(evt.target.value)
  }

  return (
    <div>
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
      <h3>Completed Tickets</h3>
      <ul>
        {props.tickets
          .filter(ticket => ticket.status === 'finished')
          .map(ticket => {
            return (
              <li key={ticket.id}>
                {ticket.issue}
                <br />
                {ticket.createdAt}
                <br />
                {ticket.status}
              </li>
            )
          })}
      </ul>
    </div>
  )
}

const mapStateToProps = state => ({
  tickets: state.worker.myTickets,
  user: state.user
})

const mapDispatchToProps = dispatch => ({
  getMyTickets: () => dispatch(getMyTickets()),
  updateInProgTicket: ticketId => dispatch(updateInProgTicket(ticketId))
})

export default connect(mapStateToProps, mapDispatchToProps)(CurrentTickets)
