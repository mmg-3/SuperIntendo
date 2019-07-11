import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import {getMyTickets, updateInProgTicket} from '../../store/worker'
import moment from 'moment'

export const TicketCurrent = props => {
  useEffect(() => {
    props.getTickets()
  }, [])

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
            .filter(
              ticket =>
                ticket.status === 'in-progress' || ticket.status === 'rejected'
            )
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
                      onClick={() => props.updateTicket(+ticket.id)}
                    >
                      <span className="icon is-small">
                        <i className="fas fa-check" />
                      </span>
                      <span>Complete</span>
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
  tickets: state.worker.myTickets
})

const mapDispatchToProps = dispatch => ({
  getTickets: () => dispatch(getMyTickets()),
  updateTicket: ticketId => dispatch(updateInProgTicket(ticketId))
})

export default connect(mapStateToProps, mapDispatchToProps)(TicketCurrent)
