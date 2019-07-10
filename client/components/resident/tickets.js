import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import {getTickets} from '../../store/resident'
import TicketArchived from './ticket-archived'
import TicketCurrent from './ticket-current'

const Tickets = props => {
  useEffect(() => {
    props.getTickets()
  }, [])
  if (props.tickets.length === 0) {
    return (
      <div>
        <h2>No tickets to display</h2>
      </div>
    )
  }
  return (
    <div>
      <TicketCurrent />
      <TicketArchived />
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
