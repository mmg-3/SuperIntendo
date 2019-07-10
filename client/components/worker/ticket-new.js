import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import {getTickets, updateSelectedTicket} from '../../store/worker'
import moment from 'moment'

export const TicketNew = props => {
  useEffect(() => {
    props.getTickets()
  }, [])
  const updateSelected = evt => {
    evt.preventDefault()
    props.updateSelectedTicket(evt.target.value)
  }

  const created = moment(props.createdAt)

  return (
    <div className="body">
      <h4 className="subtitle is-4">News Tickets</h4>{' '}
      <table className="table">
        <thead>
          <tr>
            <th>Ticket No.</th>
            <th>Date Submitted</th>
            <th>Issue</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody style={{listStyles: 'none'}}>
          {props.tickets
            .filter(ticket => ticket.status === 'approved')
            .map(ticket => {
              return (
                <tr key={ticket.id}>
                  <td>{ticket.id}</td>
                  <td>
                    <p title={created.format('MMMM Do YYYY')}>
                      {created.fromNow()}
                    </p>
                  </td>
                  <td>{ticket.issue}</td>
                  <td>{ticket.status}</td>
                  <td>
                    <a
                      className="button is-success"
                      type="submit"
                      onClick={updateSelected}
                      value={ticket.id}
                    >
                      <span className="icon is-small">
                        <i className="fas fa-check" />
                      </span>
                      <span>Accept Task</span>
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

export default connect(mapStateToProps, mapDispatchToProps)(TicketNew)
