import React, {useState} from 'react'
import {makeOnChange, TextField} from '../utils'
import {updateProfile} from '../../store/resident'
import {connect} from 'react-redux'

export const ProfileForm = props => {
  const [firstName, setFirstName] = useState(props.firstName)
  const [lastName, setLastName] = useState(props.lastName)
  const [phoneNumber, setPhoneNumber] = useState(props.phoneNumber)
  const [address1, setAddress1] = useState(props.address1)
  const [address2, setAddress2] = useState(props.address2)
  const [city, setCity] = useState(props.city)
  const [state, setState] = useState(props.state)
  const [zipcode, setZipcode] = useState(props.zipcode)

  const onSubmit = event => {
    event.preventDefault()
    props.updateProfile({
      firstName,
      lastName,
      phoneNumber,
      address1,
      address2,
      city,
      state,
      zipcode
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

        <button type="submit">Save</button>
        <button type="reset">Cancel</button>
      </form>
      <div>Alternative Mailing Address</div>
      <form onSubmit={onSubmit}>
        <TextField
          name="address1"
          label="Address"
          type="text"
          placeholder="street name"
          value={address1}
          onChange={makeOnChange(setAddress1)}
        />

        <TextField
          name="address2"
          label="Apt/Unit"
          type="text"
          placeholder="apartment number if any"
          value={address2}
          onChange={makeOnChange(setAddress2)}
        />

        <TextField
          name="city"
          label="City"
          type="text"
          placeholder="city name"
          value={city}
          onChange={makeOnChange(setCity)}
        />
        <TextField
          name="state"
          label="State"
          type="text"
          placeholder="state name, ex: NY"
          value={state}
          onChange={makeOnChange(setState)}
        />
        <TextField
          name="zipcode"
          label="Zipcode"
          type="text"
          placeholder="your zip code"
          value={zipcode}
          onChange={makeOnChange(setZipcode)}
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
