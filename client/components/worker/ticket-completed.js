import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import {getMyTickets} from '../../store/worker'

const TicketCompleted = props => {
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
          </tr>
        </thead>
        <tbody style={{listStyles: 'none'}}>
          {props.tickets
            .filter(
              ticket =>
                ticket.status === 'finished' ||
                ticket.status === 'confirmed' ||
                ticket.status === 'closed'
            )
            .map(ticket => {
              return (
                <tr key={ticket.id}>
                  <td>{ticket.id}</td>
                  <td>{props.updatedAt}</td>
                  <td>{ticket.issue}</td>
                  <td>{ticket.status}</td>
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
  getTickets: () => dispatch(getMyTickets())
})

export default connect(mapStateToProps, mapDispatchToProps)(TicketCompleted)
