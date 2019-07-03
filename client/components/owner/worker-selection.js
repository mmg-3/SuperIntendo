import React, {useState} from 'react'
import {getWorkers} from '../../store/owner'
import {connect} from 'react-redux'

export const WorkerSelection = props => {
  const [workerId, setWorkerId] = useState(props.workers.id)
  const selectWorker = e => {
    console.log('SELECT WORKER VALUE: ', e.target.value)
    setWorkerId(e.target.value)
  }
  return (
    <select onChange={selectWorker} value={workerId}>
      {props.workers.map(worker => (
        <option key={worker.id} value={worker.userId}>
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
