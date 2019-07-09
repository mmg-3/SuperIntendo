import React from 'react'
import {connect} from 'react-redux'
import {approveTicket, closeTicket, rejectTicket} from '../../store/owner'

export const Tickets = props => {
  if (!props.id) {
    return <div>Loading...</div>
  }

  const tickets = props.apartments.flatMap(apartment => apartment.tickets)
  return (
    <div>
      <div className="body">
        <h3 className="title is-6">
          Tickets Pending Approval{' '}
          <span className="tag is-warning">need action</span>
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
          {tickets.filter(ticket => ticket.status === 'pending').map(tix => (
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
        <h3 className="title is-6">
          Tickets To Close <span className="tag is-warning">need action</span>
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

          {tickets.filter(ticket => ticket.status === 'confirmed').map(tix => (
            <tbody key={tix.id}>
              <tr>
                <td>{tix.id}</td>
                <td>{tix.createdAt}</td>
                <td>{tix.location}</td>
                <td>{tix.issue}</td>
                <td>{tix.status}</td>
                <td>
                  <button
                    type="submit"
                    onClick={evt => {
                      evt.preventDefault()
                      props.closeTicket(tix.id, props.match.params.id)
                    }}
                  >
                    Close Ticket
                  </button>
                </td>
              </tr>
            </tbody>
          ))}
        </table>
        <h3 className="title is-6">
          On Going Tickets <span className="tag is-primary">in progress</span>
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
          {tickets
            .filter(
              ticket =>
                ticket.status === 'assigned' ||
                ticket.status === 'in-progress' ||
                ticket.status === 'finished'
            )
            .map(tix => (
              <tbody key={tix.id}>
                <tr>
                  <td>{tix.id}</td>
                  <td>{tix.createdAt}</td>
                  <td>{tix.location}</td>
                  <td>{tix.issue}</td>
                  <td>{tix.status}</td>
                  <td>Not Required</td>
                </tr>
              </tbody>
            ))}
        </table>
        <h3 className="title is-6">
          Past Tickets <span className="tag is-light">archived</span>
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
          {tickets.filter(ticket => ticket.status === 'closed').map(tix => (
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
    </div>
  )
}

const mapStateToProps = state => ({
  ...state.owner.selectedBuilding
})

const mapDispatchToProps = dispatch => ({
  closeTicket: (tixId, buildId) => dispatch(closeTicket(tixId, buildId)),
  approveTicket: (tixId, buildId) => dispatch(approveTicket(tixId, buildId)),
  rejectTicket: (tixId, buildId) => dispatch(rejectTicket(tixId, buildId))
})

export default connect(mapStateToProps, mapDispatchToProps)(Tickets)
