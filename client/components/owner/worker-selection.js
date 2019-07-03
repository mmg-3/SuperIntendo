import React, {useState} from 'react'
// import {getWorkers} from '../../store/owner'
import {connect} from 'react-redux'
import {assignWorker} from '../../store/owner'

export const WorkerSelection = props => {
  const [workerId, setWorkerId] = useState(props.workers.userId)
  const selectWorker = e => {
    setWorkerId(e.target.value)
  }
  return (
    <div>
      <select onChange={selectWorker} value={workerId}>
        <option>Select Worker</option>
        {props.workers.map(worker => (
          <option key={worker.id} value={worker.userId}>
            {worker.firstName} {worker.lastName}
          </option>
        ))}
      </select>
      <button
        type="submit"
        onClick={evt => {
          console.log('ONCLICK WSELECT WORKERID', workerId)
          evt.preventDefault()
          props.assignWorker(workerId)
        }}
      >
        Assign Worker
      </button>
    </div>
  )
}

const mapStateToProps = state => ({
  workers: state.owner.workers
})

const mapDispatchToProps = dispatch => ({
  // getWorkers: () => dispatch(getWorkers())
  assignWorker: workerId => dispatch(assignWorker(workerId))
})

export default connect(mapStateToProps, mapDispatchToProps)(WorkerSelection)
