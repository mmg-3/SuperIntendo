import React, {useState, useEffect} from 'react'
import {makeOnChange, TextField} from './utils'
import {updateProfile} from '../store/resident'
import {connect} from 'react-redux'
/**
 * COMPONENT
 */

export const ProfileForm = props => {
  const [firstName, setFirstName] = useState(props.resident.firstName)
  const [lastName, setLastName] = useState(props.resident.lastName)
  const [phoneNumber, setPhoneNumber] = useState(props.resident.phoneNumber)
  const [maillingAddress, setMaillingAddress] = useState(
    props.resident.maillingAddress
  )

  const onSubmit = event => {
    event.preventDefault()
    props.updateProfile({
      firstName,
      lastName,
      phoneNumber,
      maillingAddress
    })
    setFirstName(props.resident.firstName)
    setLastName(props.resident.lastName)
    setPhoneNumber(props.resident.phoneNumber)
    setMaillingAddress(props.resident.maillingAddress)
  }

  return (
    <div>
      <image src={props.resident.photoUrl} />
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
    resident: state.resident
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
