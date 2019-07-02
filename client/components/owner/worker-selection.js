import React from 'react'
import {getWorkers} from '../../store/owner'
import {connect} from 'react-redux'

export const WorkerSelection = props => {
  console.log(props.workers)
  return (
    <select>
      {props.workers.map(worker => (
        <option key={worker.id}>
          {worker.firstName} {worker.lastName}
        </option>
      ))}
    </select>
  )
}

const mapStateToProps = state => ({
  workers: state.owner.workers
})

const mapDispatchToProps = dispatch => ({
  getWorkers: () => dispatch(getWorkers())
})

export default connect(mapStateToProps, mapDispatchToProps)(WorkerSelection)
