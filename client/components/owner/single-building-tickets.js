import React from 'react'
import {connect} from 'react-redux'
import {approveTicket, closeTicket, rejectTicket} from '../../store/owner'
import TicketList from './ticket-list'

export const Tickets = props => {
  if (!props.id) {
    return <div>Loading...</div>
  }

  const bId = props.match.params.id

  const tickets = props.apartments.flatMap(apartment => apartment.tickets)
  return (
    <TicketList
      tickets={tickets}
      approveTicket={tId => props.approveTicket(tId, bId)}
      rejectTicket={tId => props.rejectTicket(tId, bId)}
      closeTicket={tId => props.closeTicket(tId, bId)}
    />
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
