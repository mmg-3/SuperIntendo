import React from 'react'

// TODO add worker info to ticket
export const TicketItem = props => {
  return (
    <div>
      <div>#{props.id}</div>
      <div>Created: {props.createdAt}</div>
      <div>{props.issue}</div>
      <div>{props.location}</div>
      {/* <div>{}</div> */}
      <div>{props.status}</div>
      <div>Updated: {props.updatedAt}</div>
    </div>
  )
}
