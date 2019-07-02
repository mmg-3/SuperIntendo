import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import {getABuilding, getWorkers} from '../../store/owner'
import WorkerSelection from './worker-selection'

export const Tickets = props => {
  useEffect(() => {
    props.getWorkers()
    props.getABuilding(props.match.params.id)
  }, [])

  console.log(props)
  if (!props.id) {
    return <div>Loading...</div>
  }
  const tickets = props.apartments.flatMap(apartment => apartment.tickets)
  return (
    <div>
      <div>{props.address} Tickets</div>
      <ul>
        {tickets.map(ticket => (
          <li key={ticket.id}>
            {ticket.issue} <WorkerSelection />
          </li>
        ))}
      </ul>
    </div>
  )
}

const mapStateToProps = state => ({
  ...state.owner.selectedBuilding
})

const mapDispatchToProps = dispatch => ({
  getABuilding: id => dispatch(getABuilding(id)),
  getWorkers: () => dispatch(getWorkers())
})

export default connect(mapStateToProps, mapDispatchToProps)(Tickets)
