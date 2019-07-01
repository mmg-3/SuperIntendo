import React, {useState} from 'react'
import {makeOnChange, TextField} from './utils'
/**
 * COMPONENT
 */

export const ProfileForm = props => {
  const [firstName, setFirstName] = useState(props.firstName)
  const [lastName, setLastName] = useState(props.lastName)
  const [phoneNumber, setPhoneNumber] = useState(props.phoneNumber)
  const [email, setEmail] = useState(props.email)
  const [address, setAddress] = useState(props.address)
  // const [photoUrl, _] = useState(props.photoUrl)

  return (
    <form onSubmit={props.handleSubmit}>
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
        name="email"
        label="Email"
        type="text"
        value={email}
        onChange={makeOnChange(setEmail)}
      />

      <TextField
        name="address"
        label="Address"
        type="text"
        value={address}
        onChange={makeOnChange(setAddress)}
      />

      <button type="submit">Save</button>
      <button type="reset">Cancel</button>
    </form>
  )
}
