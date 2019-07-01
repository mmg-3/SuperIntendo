import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import {getABuilding} from '../../store/owner'

export const Tickets = props => {
  useEffect(() => {
    props.getABuilding(props.match.params.id)
  }, [])
  console.log(props)
  if (!props.id) {
    return <div>Loading...</div>
  }
  const tickets = props.apartments.flatMap(apartment => apartment.tickets)
  return (
    <div>
      <ul>{tickets.map(ticket => <li key={ticket.id}>{ticket.issue}</li>)}</ul>
    </div>
  )
}

const mapStateToProps = state => ({
  ...state.owner.selectedBuilding
})

const mapDispatchToProps = dispatch => ({
  getABuilding: id => dispatch(getABuilding(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(Tickets)
