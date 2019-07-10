import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import {getTickets, updateSelectedTicket} from '../../store/worker'
import moment from 'moment'

export const TicketCurrent = props => {
  useEffect(() => {
    props.getTickets()
  }, [])
  const updateInProg = evt => {
    evt.preventDefault()
    props.updateInProgTicket(evt.target.value)
  }

  const updated = moment(props.updatedAt)

  return (
    <div className="body">
      <h4 className="subtitle is-4">Current Tickets</h4>{' '}
      <table className="table">
        <thead>
          <tr>
            <th>Ticket No.</th>
            <th>Last Update</th>
            <th>Issue</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody style={{listStyles: 'none'}}>
          {props.tickets
            .filter(ticket => ticket.status === 'in-progress')
            .map(ticket => {
              return (
                <tr key={ticket.id}>
                  <td>{ticket.id}</td>
                  <td>
                    <p title={updated.format('MMMM Do YYYY')}>
                      {updated.fromNow()}
                    </p>
                  </td>
                  <td>{ticket.issue}</td>
                  <td>{ticket.status}</td>
                  <td>
                    <a
                      className="button is-success"
                      type="submit"
                      onClick={() => props.updateInProgTicket(ticket.id)}
                    >
                      <span className="icon is-small">
                        <i className="fas fa-check" />
                      </span>
                      <span>Completed</span>
                    </a>
                  </td>
                </tr>
              )
            })}
        </tbody>
      </table>
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

export default connect(mapStateToProps, mapDispatchToProps)(TicketCurrent)
