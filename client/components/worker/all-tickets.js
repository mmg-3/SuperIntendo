import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import {getTickets} from '../../store/worker'

export const AllTickets = props => {
  useEffect(() => {
    props.getTickets()
  }, [])
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
                <button type="submit">Start</button>
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
                <button type="submit">Finish</button>
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
  getTickets: () => dispatch(getTickets())
})

export default connect(mapStateToProps, mapDispatchToProps)(AllTickets)
