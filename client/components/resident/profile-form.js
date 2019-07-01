import React, {useState} from 'react'
import {makeOnChange, TextField} from './utils'
/**
 * COMPONENT
 */

export const ProfileForm = props => {
  console.log('props.resident', props.resident)
  const [firstName, setFirstName] = useState(props.resident.firstName)
  const [lastName, setLastName] = useState(props.resident.lastName)
  const [phoneNumber, setPhoneNumber] = useState(props.resident.phoneNumber)
  const [email, setEmail] = useState(props.resident.email)
  const [mailingAddressAddress1, setMailingAddressAddress1] = useState(
    props.resident.mailingAddressAddress1
  )
  const [mailingAddressAddress2, setMailingAddressAddress2] = useState(
    props.resident.mailingAddressAddress2
  )
  const [mailingAddressCity, setMailingAddressCity] = useState(
    props.resident.mailingAddressCity
  )
  const [mailingAddressState, setMailingAddressState] = useState(
    props.resident.mailingAddressState
  )
  const [mailingAddressZipcode, setMailingAddressZipcode] = useState(
    props.resident.mailingAddressZipcode
  )

  const onSubmit = event => {
    event.preventDefault()
    props.handleSubmit({
      firstName,
      lastName,
      phoneNumber,
      mailingAddressAddress1,
      mailingAddressAddress2,
      mailingAddressCity,
      mailingAddressState,
      mailingAddressZipcode
    })
  }

  return (
    <div>
      <div>
        <h1>Basic Info</h1>
        <form onSubmit={onSubmit}>
          <img src={props.resident.imageUrl} />
          <TextField
            name="first-name"
            label="First Name"
            type="text"
            value={firstName}
          />

          <TextField
            name="last-name"
            label="Last Name"
            type="text"
            value={lastName}
          />

          <TextField
            name="phone-number"
            label="Phone Number"
            type="phone"
            value={phoneNumber}
            onChange={makeOnChange(setPhoneNumber)}
          />
          <button type="submit">Save</button>
          <button type="reset">Cancel</button>
        </form>
      </div>
      <div>
        <h1>Add Mailing Address</h1>
        <form onSubmit={onSubmit}>
          <TextField
            name="mailing-address-address1"
            label="Address"
            type="mailingAddress1"
            value={mailingAddressAddress1}
            onChange={makeOnChange(setMailingAddressAddress1)}
          />
          <TextField
            name="mailing-address-address2"
            label="Apartment/Unit"
            type="mailingAddress2"
            value={mailingAddressAddress2}
            onChange={makeOnChange(setMailingAddressAddress2)}
          />
          <TextField
            name="mailing-address-city"
            label="City"
            type="mailingAddressCity"
            value={mailingAddressCity}
            onChange={makeOnChange(setMailingAddressCity)}
          />
          <TextField
            name="mailing-address-state"
            label="State"
            type="mailingAddressState"
            value={mailingAddressState}
            onChange={makeOnChange(setMailingAddressState)}
          />
          <TextField
            name="mailing-address-zipcode"
            label="Zipcode"
            type="mailingAddressZipcode"
            value={mailingAddressZipcode}
            onChange={makeOnChange(setMailingAddressZipcode)}
          />
          <button type="submit">Save</button>
          <button type="reset">Cancel</button>
        </form>
      </div>
      <div>
        <h1>Change Password</h1>
      </div>
    </div>
  )
}
