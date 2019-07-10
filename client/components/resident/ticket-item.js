import React from 'react'

// TODO add worker info to ticket
export const TicketItem = props => {
  return (
    <tr>
      <td>{props.id}</td>
      <td>{props.createdAt}</td>
      <td>{props.issue}</td>
      <td>Worker Name, need to include worker model</td>
      <td>{props.status}</td>
      <td>{props.updatedAt}</td>

      {props.status === 'finished' ? (
        <td>
          <a
            className="button is-success"
            // onClick={() => props.verifyUser(props.id, resident.id)}
          >
            <span className="icon is-small">
              <i className="fas fa-check" />
            </span>
            <span>Approve</span>
          </a>

          <a
            className="button is-danger is-outlined"
            // onClick={() => props.rejectUser(props.id, resident.id)}
          >
            <span>Reject</span>
            <span className="icon is-small">
              <i className="fas fa-times" />
            </span>
          </a>
        </td>
      ) : (
        <td />
      )}
    </tr>
  )
}
