import React, {useEffect} from 'react'
import TicketItem from './ticket-item'
import {connect} from 'react-redux'
import {getTickets} from '../../store/resident'

const TicketCurrent = props => {
  useEffect(() => {
    props.getTickets()
  }, [])

  return (
    <div className="body">
      <h4 className="subtitle is-4">Archived Tickets</h4>{' '}
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
              tix => tix.status !== 'confirmed' || tix.status !== 'closed'
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

export default connect(mapStateToProps, mapDispatchToProps)(TicketCurrent)
