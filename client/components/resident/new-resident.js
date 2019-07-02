import React, {useEffect, useState} from 'react'
import {connect} from 'react-redux'
import {createResident, getBuildings} from '../../store/resident'
import {makeOnChange, TextField} from './utils'

const NewResident = props => {
  useEffect(() => {
    props.getBuildings()
  }, [])

  const [firstName, setFirstName] = useState(props.firstName)
  const [lastName, setLastName] = useState(props.lastName)
  const [phoneNumber, setPhoneNumber] = useState(props.phoneNumber)
  const [imageUrl, setImageUrl] = useState(props.imageUrl)
  const [mailingAddress, setMailingAddress] = useState(props.address)
  const [buildingIdx, setBuildingIdx] = useState(-1)
  const [aptIdx, setAptIdx] = useState(0)

  if (!props.buildings.length) {
    return <div>Loading buildings...</div>
  }

  const selectBuilding = e => {
    setBuildingIdx(e.target.value)
  }

  const selectApt = e => {
    setAptIdx(e.target.value)
  }

  const onSubmit = event => {
    event.preventDefault()
    if (buildingIdx === -1 || buildingIdx >= props.buildings.length) {
      console.error('bad index: ', {buildingIdx, buildings: props.buildings})
      return
    }

    const building = props.buildings[buildingIdx]
    if (aptIdx >= building.apartments.length) {
      console.error('bad index: ', {aptIdx, building})
      return
    }

    const apt = building.apartments[aptIdx]
    props.createResident({
      firstName,
      lastName,
      phoneNumber,
      imageUrl,
      mailingAddress,
      apartmentId: apt.id
    })
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <TextField
          required={true}
          name="firstName"
          label="First Name"
          type="text"
          value={firstName}
          onChange={makeOnChange(setFirstName)}
        />

        <TextField
          required={true}
          name="lastName"
          label="Last Name"
          type="text"
          value={lastName}
          onChange={makeOnChange(setLastName)}
        />

        <TextField
          required={true}
          name="phoneNumber"
          label="Phone Number"
          placeholder="555-555-5555"
          type="tel"
          pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
          value={phoneNumber}
          onChange={makeOnChange(setPhoneNumber)}
        />

        <TextField
          required={true}
          name="imageUrl"
          label="Image URL"
          type="text"
          value={imageUrl}
          onChange={makeOnChange(setImageUrl)}
        />
        <div>
          <label>Building:</label>
          <select onChange={selectBuilding} value={buildingIdx}>
            <option value={-1}>--</option>
            {props.buildings.map((b, idx) => (
              <option key={b.id} value={idx}>
                {b.address}
              </option>
            ))}
          </select>

          {buildingIdx > -1 && (
            <select onChange={selectApt} value={aptIdx}>
              {props.buildings[buildingIdx].apartments
                .sort()
                .map((apt, idx) => (
                  <option key={apt.id} value={idx}>
                    {apt.unitNumber}
                  </option>
                ))}
            </select>
          )}
        </div>

        <TextField
          name="address"
          label="Alternative Mailing Address"
          type="text"
          value={mailingAddress}
          onChange={makeOnChange(setMailingAddress)}
        />
        <button type="submit">Save</button>
      </form>
    </div>
  )
}

const mapStateToProps = state => ({
  buildings: state.resident.buildings
})
const mapDispatchToProps = dispatch => ({
  getBuildings: () => dispatch(getBuildings()),
  createResident: data => dispatch(createResident(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(NewResident)
