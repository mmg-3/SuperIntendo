import React, {useEffect} from 'react'
import connect from 'react-redux'
import {getAllTickets} from '../../store/worker'

export const AllTickets = props => {
  useEffect(() => {
    props.getAllTickets(props.user.id)
  })
  return (
    <div>
      <h1>ALL MY TICKETS</h1>
      <ul>
        {props.allTickets.map(ticket => <li key={ticket.id}>ticket.issue</li>)}
      </ul>
    </div>
  )
}

const mapStateToProps = state => ({
  allTickets: state.tickets
})

const mapDispatchToProps = dispatch => ({
  getAllTix: workerId => dispatch(getAllTickets(workerId))
})

export default connect(mapStateToProps, mapDispatchToProps)(AllTickets)
