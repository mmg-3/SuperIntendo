import React, {useState, useEffect} from 'react'
import {makeOnChange, TextField} from './utils'
import {updateProfile, getSelf} from '../../store/resident'
import {connect} from 'react-redux'
/**
 * COMPONENT
 */

export const ProfileForm = props => {
  const [firstName, setFirstName] = useState(props.firstName)
  const [lastName, setLastName] = useState(props.lastName)
  const [phoneNumber, setPhoneNumber] = useState(props.phoneNumber)
  const [maillingAddress, setMaillingAddress] = useState(props.maillingAddress)

  const onSubmit = event => {
    event.preventDefault()
    props.updateProfile({
      firstName,
      lastName,
      phoneNumber,
      maillingAddress
    })
  }

  console.log('props', props)
  return (
    <div>
      <img src={props.photoUrl} />
      <form onSubmit={onSubmit}>
        <TextField
          name="first-name"
          label="First Name"
          type="text"
          value={firstName}
          onChange={makeOnChange(setFirstName)}
        />

        <TextField
          name="last-name"
          label="Last Name"
          type="text"
          value={lastName}
          onChange={makeOnChange(setLastName)}
        />

        <TextField
          name="phone-number"
          label="Phone Number"
          type="phone"
          value={phoneNumber}
          onChange={makeOnChange(setPhoneNumber)}
        />

        <TextField
          name="address"
          label="Mailing Address"
          type="text"
          placeholder="alternative address if you have one"
          value={maillingAddress}
          onChange={makeOnChange(setMaillingAddress)}
        />

        <button type="submit">Save</button>
        <button type="reset">Cancel</button>
      </form>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    ...state.resident.self
  }
}

const mapDispatchToProps = dispatch => {
  return {
    updateProfile: updatedSelf => {
      dispatch(updateProfile(updatedSelf))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileForm)
