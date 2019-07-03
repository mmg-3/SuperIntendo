import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import {getTickets} from '../../store/resident'
import {TicketItem} from './ticket-item'

const Tickets = props => {
  useEffect(() => {
    props.getTickets()
  }, [])
  if (props.tickets.length === 0) {
    return <div>Loading...</div>
  }
  const closedTickets = props.tickets.filter(tix => tix.status === 'closed')
  const openTickets = props.tickets.filter(tix => tix.status !== 'closed')
  return (
    <div>
      Open:
      {openTickets.map(ticket => <TicketItem key={ticket.id} {...ticket} />)}
      Closed:
      {closedTickets.map(ticket => <TicketItem key={ticket.id} {...ticket} />)}
    </div>
  )
}

const mapStateToProps = state => ({
  tickets: state.resident.tickets
})

const mapDispatchToProps = dispatch => ({
  getTickets: () => dispatch(getTickets())
})

export default connect(mapStateToProps, mapDispatchToProps)(Tickets)
