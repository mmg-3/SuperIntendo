import PropTypes from 'prop-types'
import React from 'react'
import {connect} from 'react-redux'
import {ProfileForm} from './profile-form'
import {
  getResidentProfileThunk,
  updateResidentProfileThunk
} from '../../store/residentReducer'

/**
 * COMPONENT
 */
const Profile = props => {
  console.log('this is the props', props)
  return (
    <div>
      <h1>hello</h1>
      <ProfileForm />
    </div>
  )
}

const mapStateToProps = state => {
  return {
    resident: state.resident,
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
