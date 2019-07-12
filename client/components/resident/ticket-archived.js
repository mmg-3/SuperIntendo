import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import {getTickets} from '../../store/resident'
import TicketItem from './ticket-item'

export const TicketArchived = props => {
  useEffect(() => {
    props.getTickets()
  }, [])
  return (
    <div className="body ticket-holder">
      <h4 className="subtitle is-4">Past Tickets</h4>
      <span className="tag is-warning">archived</span>
      <table className="table">
        <thead>
          <tr>
            <th>Ticket No.</th>
            <th>Submitted</th>
            <th>Location</th>
            <th>Issue</th>
            <th>Worker</th>
            <th>Status</th>
            <th>Updated</th>
          </tr>
        </thead>
        <tbody>
          {props.tickets
            .filter(
              tix =>
                tix.status === 'completed' ||
                tix.status === 'closed' ||
                tix.status === 'in-progress' ||
                tix.status === 'finished'
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
