import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import {getTickets} from '../../store/resident'
import {TicketItem} from './ticket-item'

export const TicketArchived = props => {
  useEffect(() => {
    props.getTickets()
  }, [])
  return (
    <div>
      <h1>ARCHIVED TICKETS</h1>
      <table className="table">
        <thead>
          <tr>
            <th>Ticket No.</th>
            <th>Date Submitted</th>
            <th>Issue</th>
            <th>Assigned Worker</th>
            <th>Status</th>
            <th>Date Updated</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {props.tickets
            .filter(
              tix => tix.status === 'confirmed' || tix.status === 'closed'
            )
            .map(tix => <TicketItem {...tix} key={tix.id} />)}
        </tbody>
      </table>
    </div>
  )
}

const mapStateToProps = state => ({
  tickets: state.resident.tickets
})

const mapDispatchToProps = dispatch => ({
  getTickets: () => dispatch(getTickets())
})

export default connect(mapStateToProps, mapDispatchToProps)(TicketArchived)
