import React, {useState} from 'react'
import {connect} from 'react-redux'
import {assignWorker} from '../../store/owner'

export const WorkerSelection = props => {
  const [workerId, setWorkerId] = useState(-1)
  const selectWorker = e => {
    setWorkerId(e.target.value)
  }
  return (
    <div>
      <select onChange={selectWorker} value={workerId}>
        <option value="-1">Select Worker</option>
        {props.workers.map(worker => (
          <option key={worker.id} value={worker.id}>
            {worker.firstName} {worker.lastName}
          </option>
        ))}
      </select>
      <button
        type="submit"
        onClick={evt => {
          evt.preventDefault()
          props.assignWorker(props.tixId, props.buildId, workerId)
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
  assignWorker: (tixId, buildId, workerId) =>
    dispatch(assignWorker(tixId, buildId, workerId))
})

export default connect(mapStateToProps, mapDispatchToProps)(WorkerSelection)
