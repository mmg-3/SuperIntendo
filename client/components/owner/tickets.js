/* eslint-disable complexity */
import moment from 'moment'
import React, {useEffect, useState} from 'react'
import {connect} from 'react-redux'
import {getTickets} from '../../store/owner'
import '../css/owner/ticket.scss'
const Tickets = props => {
  useEffect(() => {
    props.getTickets()
  }, [])

  const [modalActive, setModelActive] = useState(false)

  if (props.tickets.length === 0) {
    return <div>No tickets for any buildings!</div>
  }

  const pending = props.tickets.filter(tix => tix.status === 'pending'),
    assigned = props.tickets.filter(tix => tix.status === 'assigned'),
    inProgress = props.tickets.filter(tix => tix.status === 'in-progress'),
    finished = props.tickets.filter(tix => tix.status === 'finished'),
    confirmed = props.tickets.filter(tix => tix.status === 'confirmed'),
    closed = props.tickets.filter(tix => tix.status === 'closed')

  const showActionsNeeded = pending.length > 0 || confirmed.length > 0,
    showWaiting =
      assigned.length > 0 || inProgress.length > 0 || finished.length > 0,
    showClosed = closed.length > 0
  const modalClass = 'class ' + (modalActive ? 'is-active' : '')
  return (
    <div className="body">
      {showActionsNeeded && (
        <div>
          <h2 id="actions-needed">Actions Needed</h2>
          <div className="body">
            {pending.length > 0 &&
              ticketTableWithAction(pending, 'Pending', 'is-warning')}
            {confirmed.length > 0 &&
              ticketTableWithAction(confirmed, 'Confirmed', 'is-warning')}
          </div>
        </div>
      )}
      {showWaiting && (
        <div>
          <h2>Waiting for other user</h2>
          <div className="body">
            {assigned.length > 0 &&
              ticketTable(assigned, 'Assigned', 'is-primary', setModelActive)}
            {inProgress.length > 0 &&
              ticketTable(
                inProgress,
                'In Progress',
                'is-primary',
                setModelActive
              )}
            {finished.length > 0 &&
              ticketTable(finished, 'Finished', 'is-primary', setModelActive)}
          </div>
        </div>
      )}
      {showClosed && (
        <div>
          <h2 id="closed">Closed</h2>
          <div className="body">
            {closed.length > 0 && ticketTable(closed, 'Archived', 'is-light')}
          </div>
        </div>
      )}
    </div>
  )
}

const ticketTable = (tickets, title, labelClass, setModal) => {
  return (
    <div className="body ticket-holder">
      <h3 className="title is-6">
        <span className={`tag ${labelClass}`}>{title}</span>
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
        <tbody>
          {tickets.map(tix => {
            const time = moment(tix.createdAt)
            return (
              <tr key={tix.id} onClick={() => setModal(true)}>
                <td>{tix.id}</td>
                <td title={time.format('MMMM Do YYYY')}>{time.fromNow()}</td>
                <td>
                  {tix.apartment.building.address} - {tix.apartment.unitNumber}
                </td>
                <td>{tix.issue}</td>
                <td>{tix.status}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

const ticketTableWithAction = (tickets, title, labelClass) => {
  return (
    <div className="body ticket-holder">
      <h3 className="title is-6">
        <span className={`tag ${labelClass}`}>{title}</span>
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
        <tbody>
          {tickets.map(tix => {
            const time = moment(tix.createdAt)
            return (
              <tr key={tix.id}>
                <td>{tix.id}</td>
                <td title={time.format('MMMM Do YYYY')}>{time.fromNow()}</td>
                <td>
                  {tix.apartment.building.address} - {tix.apartment.unitNumber}
                </td>
                <td>{tix.issue}</td>
                <td>{tix.status}</td>
                <td>
                  {/* <button
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
              </button> */}
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
  tickets: state.owner.tickets
})
const mapDispatchToProps = dispatch => ({
  getTickets: () => dispatch(getTickets())
})

export default connect(mapStateToProps, mapDispatchToProps)(Tickets)
