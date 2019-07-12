/* eslint-disable complexity */
import moment from 'moment'
import PropTypes from 'prop-types'
import React from 'react'
import history from '../../history'

const ticketTable = (tickets, title, labelClass) => {
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
              <tr
                key={tix.id}
                onClick={() => history.push(`/tickets/${tix.id}`)}
              >
                <td>{tix.id}</td>
                <td title={time.format('MMMM Do YYYY')}>{time.fromNow()}</td>
                <td>
                  {!tix.apartment
                    ? tix.location
                    : `${tix.apartment.building.address} - ${
                        tix.apartment.unitNumber
                      }`}
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

const ticketTableWithAction = (
  tickets,
  title,
  labelClass,
  {accept, reject}
) => {
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
              <tr
                key={tix.id}
                onClick={() => history.push(`/tickets/${tix.id}`)}
              >
                <td>{tix.id}</td>
                <td title={time.format('MMMM Do YYYY')}>{time.fromNow()}</td>
                <td>
                  {!tix.apartment
                    ? tix.location
                    : `${tix.apartment.building.address} - ${
                        tix.apartment.unitNumber
                      }`}
                </td>
                <td>{tix.issue}</td>
                <td>{tix.status}</td>
                <td>
                  {accept && (
                    <a
                      className="button is-success"
                      onClick={e => {
                        e.stopPropagation()
                        accept.ticket(tix.id)
                      }}
                    >
                      <span className="icon is-small">
                        <i className="fas fa-check" />
                      </span>
                      <span>{accept.name}</span>
                    </a>
                  )}
                  {reject && (
                    <a
                      className="button is-danger is-outlined"
                      onClick={e => {
                        e.stopPropagation()
                        reject.ticket(tix.id)
                      }}
                    >
                      <span>Reject</span>
                      <span className="icon is-small">
                        <i className="fas fa-times" />
                      </span>
                    </a>
                  )}
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

const TicketList = props => {
  const pending = props.tickets.filter(tix => tix.status === 'pending'),
    approved = props.tickets.filter(tix => tix.status === 'approved'),
    inProgress = props.tickets.filter(tix => tix.status === 'in-progress'),
    finished = props.tickets.filter(tix => tix.status === 'finished'),
    confirmed = props.tickets.filter(tix => tix.status === 'confirmed'),
    closed = props.tickets.filter(tix => tix.status === 'closed')

  const showActionsNeeded = pending.length > 0 || confirmed.length > 0,
    showWaiting =
      approved.length > 0 || inProgress.length > 0 || finished.length > 0,
    showClosed = closed.length > 0
  return (
    <div className="body">
      {showActionsNeeded && (
        <div>
          <h4 className="subtitle is-4">Actions Needed</h4>
          <div className="body">
            {pending.length > 0 &&
              ticketTableWithAction(pending, 'Pending', 'is-warning', {
                accept: {
                  name: 'Approve',
                  ticket: id => props.approveTicket(id)
                },
                reject: {
                  name: 'Reject',
                  ticket: id => props.rejectTicket(id)
                }
              })}
            {confirmed.length > 0 &&
              ticketTableWithAction(confirmed, 'Confirmed', 'is-warning', {
                accept: {
                  name: 'Close',
                  ticket: id => props.closeTicket(id)
                }
              })}
          </div>
        </div>
      )}
      {showWaiting && (
        <div>
          <h4 className="subtitle is-4">Waiting For Other User</h4>
          <div className="body">
            {approved.length > 0 &&
              ticketTable(approved, 'Assigned', 'is-primary')}
            {inProgress.length > 0 &&
              ticketTable(inProgress, 'In Progress', 'is-primary')}
            {finished.length > 0 &&
              ticketTable(finished, 'Finished', 'is-primary')}
          </div>
        </div>
      )}
      {showClosed && (
        <div>
          <h2>
            <span id="closed">Closed</span>{' '}
          </h2>
          <div className="body">
            {closed.length > 0 && ticketTable(closed, 'Archived', 'is-light')}
          </div>
        </div>
      )}
    </div>
  )
}

export default TicketList

TicketList.propTypes = {
  tickets: PropTypes.array.isRequired,
  approveTicket: PropTypes.func.isRequired,
  rejectTicket: PropTypes.func.isRequired,
  closeTicket: PropTypes.func.isRequired
}
