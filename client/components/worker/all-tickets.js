import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import {getAllTickets} from '../../store/worker'

export const AllTickets = props => {
  // useEffect(() => {
  //   props.getAllTickets()
  // }, [])
  return (
    <div>
      <h1>ALL MY TICKETS</h1>
      <h3>THE PROPS</h3>
      {console.log('THE PROPS', props)}
      <ul>
        {/* {props.allTickets.map(ticket => <li key={ticket.id}>ticket.issue</li>)} */}
      </ul>
    </div>
  )
}

const mapStateToProps = state => ({
  tickets: state.worker.tickets
})

const mapDispatchToProps = dispatch => ({
  getAllTickets: () => dispatch(getAllTickets())
})

export default connect(mapStateToProps, mapDispatchToProps)(AllTickets)
