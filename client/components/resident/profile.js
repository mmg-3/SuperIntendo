import PropTypes from 'prop-types'
import React, {useEffect} from 'react'
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
  useEffect(() => {
    props.getProfileData()
    props.updateProfileData()
  }, [])

  if (!props.resident.id) {
    return <div />
  }
  return (
    <div>
      <ProfileForm
        getProfileData={props.getProfileData}
        handleSubmit={props.updateProfileData}
        resident={props.resident}
      />
    </div>
  )
}

const mapStateToProps = state => {
  return {
    user: state.user,
    resident: state.resident,
    name: 'login',
    displayName: 'Login',
    error: state.user.error
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getProfileData: () => dispatch(getResidentProfileThunk()),
    updateProfileData: updatedResident =>
      dispatch(updateResidentProfileThunk(updatedResident))
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
