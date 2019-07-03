import PropTypes from 'prop-types'
import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import ProfileForm from './profile-form'
import {getSelf} from '../../store/resident'

/**
 * COMPONENT
 */
const Profile = props => {
  useEffect(() => {
    props.getResident()
  }, [])
  if (!props.self.id) {
    return <div>...is loading</div>
  }
  return (
    <div>
      <ProfileForm {...props.self} />
    </div>
  )
}

const mapStateToProps = state => {
  return {
    name: 'login',
    displayName: 'Login',
    error: state.user.error,
    self: state.resident.self
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getResident: () => {
      dispatch(getSelf())
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Profile)

/**
 * PROP TYPES
 */
Profile.propTypes = {
  name: PropTypes.string.isRequired,
  displayName: PropTypes.string.isRequired,
  // handleSubmit: PropTypes.func.isRequired,
  error: PropTypes.object
}
