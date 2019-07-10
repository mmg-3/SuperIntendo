import React, {useEffect, useState} from 'react'
import {connect} from 'react-redux'
import {createResident, getBuildings} from '../../store/resident'
import {makeOnChange} from '../utils'

const NewResident = props => {
  useEffect(() => {
    props.getBuildings()
  }, [])

  const [firstName, setFirstName] = useState(props.firstName)
  const [lastName, setLastName] = useState(props.lastName)
  const [phoneNumber, setPhoneNumber] = useState(props.phoneNumber)
  const [address1, setAddress1] = useState(props.address1)
  const [address2, setAddress2] = useState(props.address2)
  const [city, setCity] = useState(props.city)
  const [state, setState] = useState(props.state)
  const [zipcode, setZipcode] = useState(props.zipcode)

  const [buildingIdx, setBuildingIdx] = useState(-1)
  const [aptIdx, setAptIdx] = useState(0)
  const [file, setFile] = useState()

  //if they are a resident, then let's change our display
  if (props.user.isResident) {
    if (props.user.isResidentVerified) {
      return <div>Your application has already been approved</div>
    } else {
      return <div>Your application is under review</div>
    }
  }

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
      file,
      address1,
      address2,
      city,
      state,
      zipcode,
      apartmentId: apt.id
    })
  }

  return (
    <div>
      <div className="body">
        <div className="columns is-half-desktop">
          <div className="columns">
            <form onSubmit={onSubmit} className="form-ticket">
              <div className="field is-horizontal">
                <h5 className="title is-4">Application</h5>
              </div>
              <br />
              <div className="field is-horizontal">
                <div className="field-label is-normal">
                  <label className="label">Name</label>
                </div>
                <div className="field-body">
                  <div className="field">
                    <input
                      className="input"
                      type="text"
                      placeholder="First Name"
                      value={firstName}
                      required={true}
                      onChange={makeOnChange(setFirstName)}
                    />
                  </div>
                  <div className="field">
                    <input
                      className="input"
                      type="text"
                      required={true}
                      placeholder="Last Name"
                      value={lastName}
                      onChange={makeOnChange(setLastName)}
                    />
                  </div>
                </div>
              </div>
              <div className="field is-horizontal">
                <div className="field-label is-normal">
                  <label className="label">Phone</label>
                </div>
                <div className="field-body">
                  <div className="field is-expanded">
                    <div className="field has-addons">
                      <p className="control">
                        <a className="button is-static">+1</a>
                      </p>
                      <p className="control is-expanded">
                        <input
                          className="input"
                          type="tel"
                          placeholder="555-555-5555"
                          value={phoneNumber}
                          onChange={makeOnChange(setPhoneNumber)}
                        />
                      </p>
                    </div>
                    <p className="help">
                      please enter your phone number for work
                    </p>
                  </div>
                </div>
              </div>
              <div className="field is-horizontal">
                <div className="field-label is-normal">
                  <label className="label">Photo</label>
                </div>
                <div className="field-body">
                  <div className="field">
                    <div className="control">
                      <div className="file is-boxed">
                        <label className="file-label">
                          <input
                            className="file-input"
                            name="file"
                            label="Portrait Photo"
                            type="file"
                            accept="image/*"
                            multiple={false}
                            required={true}
                            onChange={e => setFile(e.target.files[0])}
                          />
                          <span className="file-cta">
                            <span className="file-icon">
                              <i className="fas fa-upload" />
                            </span>
                            <span className="file-label">Choose a file…</span>
                          </span>
                          <span className="file-name">
                            {(file && file.name) || 'Profile Picture'}
                          </span>
                        </label>
                      </div>
                    </div>
                    <p className="help">
                      please upload an identifiable photo that show your face
                    </p>
                  </div>
                </div>
              </div>
              <div className="field is-horizontal">
                <div className="field-label is-normal">
                  <label className="label">Address</label>
                </div>
                <div className="field-body">
                  <div className="field">
                    <input
                      className="input"
                      type="text"
                      placeholder="Address"
                      value={address1}
                      onChange={makeOnChange(setAddress1)}
                    />
                  </div>
                  <div className="field">
                    <input
                      className="input"
                      type="text"
                      placeholder="Apt No."
                      value={address2}
                      onChange={makeOnChange(setAddress2)}
                    />
                  </div>
                </div>
              </div>
              <div className="field is-horizontal">
                <div className="field-label is-normal">
                  <label className="label" />
                </div>

                <div className="field-body">
                  <div className="field">
                    <input
                      className="input"
                      type="text"
                      placeholder="City"
                      value={city}
                      onChange={makeOnChange(setCity)}
                    />
                  </div>
                  <div className="field">
                    <input
                      className="input"
                      type="text"
                      placeholder="State"
                      value={state}
                      onChange={makeOnChange(setState)}
                    />
                  </div>

                  <div className="field">
                    <input
                      className="input"
                      type="text"
                      placeholder="Zipcode"
                      value={zipcode}
                      onChange={makeOnChange(setZipcode)}
                    />
                  </div>
                </div>
              </div>
              <div className="field is-horizontal">
                <div className="field-label is-normal">
                  <label className="label">Residence</label>
                </div>
                <div className="field-body">
                  <div className="field is-narrow">
                    <div className="control">
                      <p className="help">
                        please select the building and apartment you live in
                      </p>
                      <span className="select">
                        <select onChange={selectBuilding} value={buildingIdx}>
                          <option value="-1">select building</option>
                          {props.buildings.map((b, idx) => (
                            <option key={b.id} value={idx}>
                              {b.address}
                            </option>
                          ))}
                        </select>
                      </span>
                      <span className="select">
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
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="field is-horizontal">
                <div className="field-label is-normal">
                  <label className="label" />
                </div>
                <div className="field-label" />
                <div className="field-body">
                  <div className="field">
                    <div className="control">
                      <button className="button is-primary" type="submit">
                        Submit
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  buildings: state.resident.buildings,
  user: state.user
})
const mapDispatchToProps = dispatch => ({
  getBuildings: () => dispatch(getBuildings()),
  createResident: data => dispatch(createResident(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(NewResident)
