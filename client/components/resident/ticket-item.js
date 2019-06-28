import React from 'react'

export const TicketItem = props => {
  return (
    <div>
      <div>{props.ticketNumber}</div>
      <div>{props.dateSubmitted}</div>
      <div>{props.issue}</div>
      <div>{props.worker}</div>
      <div>{props.status}</div>
    </div>
  )
}
