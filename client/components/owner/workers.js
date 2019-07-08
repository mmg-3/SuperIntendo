import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import {getWorkers, verifyWorker, rejectWorker} from '../../store/owner'

export const Workers = props => {
  useEffect(() => {
    props.getWorkers()
  }, [])

  return (
    <div>
      <h3>New Applicants</h3>
      <ul liststyle={{style: 'none'}}>
        {props.workers
          .filter(worker => worker.isVerified === false)
          .map(worker => {
            return (
              <div key={worker.id}>
                <li>
                  {worker.firstName} {worker.lastName}
                  <button
                    type="submit"
                    value={worker.id}
                    onClick={evt => {
                      evt.preventDefault()
                      props.verifyWorker(evt.target.value)
                    }}
                  >
                    Verify
                  </button>
                  <button
                    type="button"
                    value={worker.id}
                    onClick={evt => {
                      evt.preventDefault()
                      props.rejectWorker(evt.target.value)
                    }}
                  >
                    Reject
                  </button>
                </li>
              </div>
            )
          })}
      </ul>
      <h3>Verified Workers</h3>
      <ul>
        {props.workers
          .filter(worker => worker.isVerified === true)
          .map(worker => (
            <li key={worker.id}>
              {worker.firstName} {worker.lastName}
            </li>
          ))}
      </ul>
    </div>
  )
}

const mapStateToProps = state => ({
  workers: state.owner.workers
})

const mapDispatchToProps = dispatch => ({
  getWorkers: () => dispatch(getWorkers()),
  verifyWorker: workerId => dispatch(verifyWorker(workerId)),
  rejectWorker: workerId => dispatch(rejectWorker(workerId))
})

export default connect(mapStateToProps, mapDispatchToProps)(Workers)
