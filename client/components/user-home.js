import PropTypes from 'prop-types'
import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {getMyBuilding, getMyApartment} from '../store/resident'

/**
 * COMPONENT
 */
export const UserHome = props => {
  useEffect(() => {
    props.getMyBuilding()
    props.getMyApartment()
  }, {})
  const {
    email,
    isResident,
    isResidentVerified,
    isOwner,
    isWorker,
    isWorkerVerified
  } = props

  return (
    <div>
      <h2>
        {props.address} - {props.unit}
      </h2>
      <h3>Welcome, {email}.</h3>
      {!isResident &&
        !isWorker &&
        !isOwner && (
          <div>
            <Link to="/new-resident/">Become a resident</Link>
            <br />
            <Link to="/new-worker/">Become a worker</Link>
          </div>
        )}
      {isResident &&
        !isResidentVerified && (
          <div>Your residence application is under review</div>
        )}
      {isWorker &&
        !isWorkerVerified && (
          <div>Your application has been submitted and will be reviewed!</div>
        )}
    </div>
  )
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    email: state.user.email,
    isResident: state.user.isResident,
    isOwner: state.user.isOwner,
    isWorker: state.user.isWorker,
    isResidentVerified: state.user.isResidentVerified,
    isWorkerVerified: state.user.isWorkerVerified,
    address: state.resident.myBuilding.address,
    unit: state.resident.myApartment.unitNumber
  }
}

const mapDispatchToProps = dispatch => ({
  getMyBuilding: () => dispatch(getMyBuilding()),
  getMyApartment: () => dispatch(getMyApartment())
})

export default connect(mapState, mapDispatchToProps)(UserHome)

/**
 * PROP TYPES
 */
UserHome.propTypes = {
  email: PropTypes.string
}
