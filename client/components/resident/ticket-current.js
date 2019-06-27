import React from 'react'
import {TicketItem} from './ticket-item'
export const TicketCurrent = props => {
  return (
    <div>
      <div>
        <div>Ticket Number</div>
        <div>Date Submitted</div>
        <div>Issue</div>
        <div>Assigned Worker</div>
        <div>Status</div>
      </div>
      {props.tickets.map(tix => <TicketItem {...tix} key={tix.id} />)}
    </div>
  )
}
