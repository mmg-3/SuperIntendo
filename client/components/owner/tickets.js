/* eslint-disable complexity */
import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import {
  approveTicket,
  closeTicket,
  getTickets,
  rejectTicket
} from '../../store/owner'
import '../css/owner/ticket.scss'
import TicketList from './ticket-list'
const Tickets = props => {
  useEffect(() => {
    props.getTickets()
  }, [])

  if (props.tickets.length === 0) {
    return <div>No tickets for any buildings!</div>
  }

  return (
    <TicketList
      tickets={props.tickets}
      approveTicket={props.approveTicket}
      rejectTicket={props.rejectTicket}
      closeTicket={props.closeTicket}
      baseURL="/tickets/"
    />
  )
}

const mapStateToProps = state => ({
  tickets: state.owner.tickets
})
const mapDispatchToProps = dispatch => ({
  getTickets: () => dispatch(getTickets()),
  approveTicket: id => dispatch(approveTicket(id)),
  rejectTicket: id => dispatch(rejectTicket(id)),
  closeTicket: id => dispatch(closeTicket(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(Tickets)
