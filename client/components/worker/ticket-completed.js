import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import {getTickets, updateSelectedTicket} from '../../store/worker'

export const TicketCompleted = props => {
  useEffect(() => {
    props.getTickets()
  }, [])

  return (
    <div className="body">
      <h4 className="subtitle is-4">Completed Tickets</h4>{' '}
      <table className="table">
        <thead>
          <tr>
            <th>Ticket No.</th>
            <th>Finished Date</th>
            <th>Issue</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody style={{listStyles: 'none'}}>
          {props.tickets
            .filter(ticket => ticket.status === 'finished')
            .map(ticket => {
              return (
                <tr key={ticket.id}>
                  <td>{ticket.id}</td>
                  <td>{props.updatedAt}</td>
                  <td>{ticket.issue}</td>
                  <td>{ticket.status}</td>
                  <td>archived</td>
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

export default connect(mapStateToProps, mapDispatchToProps)(TicketCompleted)
