import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import {getTickets} from '../../store/owner'
const Tickets = props => {
  useEffect(() => {
    props.getTickets()
  }, [])

  if (props.tickets.length === 0) {
    return <div>No tickets for any buildings!</div>
  }

  const pending = props.tickets.filter(tix => tix.status === 'pending'),
    confirmed = props.tickets.filter(tix => tix.status === 'confirmed'),
    assigned = props.tickets.filter(tix => tix.status === 'assigned'),
    inProgress = props.tickets.filter(tix => tix.status === 'in-progress'),
    closed = props.tickets.filter(tix => tix.status === 'closed')

  return (
    <div>{ticketTable(closed, 'Past Tickets', 'archived', 'is-light')}</div>
  )
}

const ticketTable = (tickets, title, label, labelClass) => (
  <div>
    <h3 className="title is-6">
      {title} <span className={`tag ${labelClass}`}>{label}</span>
    </h3>
    <table className="table">
      <thead>
        <tr>
          <th>Ticket No.</th>
          <th>Date</th>
          <th>Location</th>
          <th>Issue</th>
          <th>Status</th>
        </tr>
      </thead>
      {tickets.map(tix => (
        <tbody key={tix.id}>
          <tr>
            <td>{tix.id}</td>
            <td>{tix.createdAt}</td>
            <td>{tix.location}</td>
            <td>{tix.issue}</td>
            <td>{tix.status}</td>
          </tr>
        </tbody>
      ))}
    </table>
  </div>
)

const ticketTableWithAction = (tickets, title, label, labelClass) => (
  <div>
    <h3 className="title is-6">
      {title} <span className={`tag ${labelClass}`}>{label}</span>
    </h3>
    <table className="table">
      <thead>
        <tr>
          <th>Ticket No.</th>
          <th>Date</th>
          <th>Location</th>
          <th>Issue</th>
          <th>Status</th>
          <th>Action</th>
        </tr>
      </thead>
      {tickets.map(tix => (
        <tbody key={tix.id}>
          <tr>
            <td>{tix.id}</td>
            <td>{tix.createdAt}</td>
            <td>{tix.location}</td>
            <td>{tix.issue}</td>
            <td>{tix.status}</td>
            <td>
              <button
                className="button-custom"
                type="submit"
                onClick={evt => {
                  evt.preventDefault()
                  props.approveTicket(tix.id, props.match.params.id)
                }}
              >
                Approve
              </button>
              <button
                className="button-custom"
                type="submit"
                onClick={evt => {
                  evt.preventDefault()
                  props.rejectTicket(tix.id, props.match.params.id)
                }}
              >
                Reject
              </button>
            </td>
          </tr>
        </tbody>
      ))}
    </table>
  </div>
)

const mapStateToProps = state => ({
  tickets: state.owner.tickets
})
const mapDispatchToProps = dispatch => ({
  getTickets: () => dispatch(getTickets())
})

export default connect(mapStateToProps, mapDispatchToProps)(Tickets)
