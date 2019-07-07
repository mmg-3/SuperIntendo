import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import {getTickets, updateSelectedTicket} from '../../store/worker'
import CurrentTickets from './current-tickets'

export const AllTickets = props => {
  useEffect(() => {
    props.getTickets()
  }, [])
  const updateSelected = evt => {
    evt.preventDefault()
    props.updateSelectedTicket(evt.target.value)
  }

  return (
    <div>
      <h3>New Tickets</h3>
      <ul style={{listStyles: 'none'}}>
        {props.tickets
          .filter(ticket => ticket.status === 'approved')
          .map(ticket => {
            return (
              <li key={ticket.id}>
                {ticket.issue}
                <br />
                {ticket.status}
                <br />
                <button
                  type="submit"
                  onClick={updateSelected}
                  value={ticket.id}
                >
                  Start
                </button>
              </li>
            )
          })}
      </ul>
      <CurrentTickets />
    </div>
  )
}

const mapStateToProps = state => ({
  user: state.user,
  tickets: state.worker.tickets
})

const mapDispatchToProps = dispatch => ({
  getTickets: () => dispatch(getTickets()),
  updateSelectedTicket: ticketId => dispatch(updateSelectedTicket(ticketId))
})

export default connect(mapStateToProps, mapDispatchToProps)(AllTickets)
