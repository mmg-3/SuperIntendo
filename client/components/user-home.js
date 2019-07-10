/* eslint-disable complexity */
import PropTypes from 'prop-types'
import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {getMyApartment, getMyBuilding} from '../store/resident'

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
    <div className="body">
      <section className="hero is-bold">
        <div className="hero-body">
          <div className="container">
            <h1 className="title is-4">
              "Life is too complicated not to be orderly"
            </h1>
            <h2 className="subtitle">Hello, {email}</h2>
            {!isResident &&
              !isWorker &&
              !isOwner && (
                <div>
                  <Link to="/new-resident/">Become a resident</Link>
                  <Link to="/new-worker/">Become a worker</Link>
                </div>
              )}

            {isResident &&
              !isResidentVerified && (
                <div>Your residence application is under review</div>
              )}
            {isWorker &&
              !isWorkerVerified && (
                <div>
                  Your application has been submitted and will be reviewed!
                </div>
              )}
          </div>
        </div>
      </section>
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
