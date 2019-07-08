import PropTypes from 'prop-types'
import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

/**
 * COMPONENT
 */
export const UserHome = props => {
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
      <h3>Welcome, {email}</h3>
      {!isResident &&
        !isWorker && (
          <div>
            <Link to="/new-resident/">Become a resident</Link>
          </div>
        )}
      {isResidentVerified && (
        <div>
          <Link to="/tickets">Tickets</Link>
          <Link to="/profile">Profile</Link>
          <Link to="/news">News</Link>
        </div>
      )}
      {isResident &&
        !isResidentVerified && (
          <div>Your residence application is under review</div>
        )}
      {isWorkerVerified && (
        <div>
          <Link to="/tickets">Tickets</Link>
        </div>
      )}
      {isWorker &&
        !isWorkerVerified && (
          <div>Your application has been submitted and will be reviewed!</div>
        )}
      {!isWorker && (
        <div>
          <Link to="/new-worker/">Become a worker</Link>
        </div>
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
    isWorkerVerified: state.user.isWorkerVerified
  }
}

export default connect(mapState)(UserHome)

/**
 * PROP TYPES
 */
UserHome.propTypes = {
  email: PropTypes.string
}
