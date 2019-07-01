import PropTypes from 'prop-types'
import React from 'react'
import {connect} from 'react-redux'
import {ProfileForm} from './profile-form'
import {
  getResidentProfileThunk,
  updateResidentProfileThunk
} from '../store/residentReducer'
/**
 * COMPONENT
 */
const Profile = props => {
  return (
    <div>
      <ProfileForm />
    </div>
  )
}

const mapStateToProps = state => {
  return {
    name: 'login',
    displayName: 'Login',
    error: state.user.error
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getProfileData: () => dispatch(getResidentProfileThunk()),
    updateProfileData: () => dispatch(updateResidentProfileThunk(updateProfile))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Profile)

/**
 * PROP TYPES
 */
Profile.propTypes = {
  name: PropTypes.string.isRequired,
  displayName: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  error: PropTypes.object
}
