import React from 'react'
import moment from 'moment'
import {confirmTicket, rejectTicket} from '../../store/resident'
import {connect} from 'react-redux'
import history from '../../history'

const TicketItem = props => {
  const created = moment(props.createdAt)
  const updated = moment(props.updatedAt)
  return (
    <tr>
      <td onClick={() => history.push(`/my-tickets/${props.id}`)}>
        {props.id}
      </td>
      <td onClick={() => history.push(`/my-tickets/${props.id}`)}>
        <p title={created.format('MMMM Do YYYY')}>{created.fromNow()}</p>
      </td>
      <td onClick={() => history.push(`/my-tickets/${props.id}`)}>
        {props.location}
      </td>
      <td onClick={() => history.push(`/my-tickets/${props.id}`)}>
        {props.issue}
      </td>
      <td onClick={() => history.push(`/my-tickets/${props.id}`)}>
        {props.worker
          ? props.worker.firstName + ' ' + props.worker.lastName
          : ''}
      </td>
      <td onClick={() => history.push(`/my-tickets/${props.id}`)}>
        {props.status}
      </td>
      <td>
        <p title={updated.format('MMMM Do YYYY')}>{updated.fromNow()}</p>
      </td>

      {props.status === 'finished' ? (
        <td>
          <a
            className="button is-success"
            onClick={() => props.confirmTicket(props.id)}
          >
            <span className="icon is-small">
              <i className="fas fa-check" />
            </span>
            <span>Approve</span>
          </a>

          <a
            className="button is-danger is-outlined"
            onClick={() => props.rejectTicket(props.id)}
          >
            <span>Reject</span>
            <span className="icon is-small">
              <i className="fas fa-times" />
            </span>
          </a>
        </td>
      ) : (
        <td onClick={() => history.push(`/my-tickets/${props.id}`)} />
      )}
    </tr>
  )
}

const mapDispatchToProps = dispatch => ({
  confirmTicket: ticketId => dispatch(confirmTicket(ticketId)),
  rejectTicket: ticketId => dispatch(rejectTicket(ticketId))
})

export default connect(null, mapDispatchToProps)(TicketItem)
