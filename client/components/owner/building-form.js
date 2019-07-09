import React, {useState} from 'react'
import {makeOnChange, TextField, useModal} from '../utils'

export const BuildingForm = props => {
  const [address, setAddress] = useState(props.address)
  const [city, setCity] = useState(props.city)
  const [state, setState] = useState(props.state)
  const [zipcode, setZipcode] = useState(props.zipcode)
  const [buildingUrl, setBuildingUrl] = useState(props.buildingUrl)

  const onSubmit = event => {
    event.preventDefault()
    props.handleSubmit({
      address,
      city,
      state,
      zipcode,
      buildingUrl
    })
  }

  return (
    <div>
      <div className="columns is-mobile">
        <form onSubmit={onSubmit} className="add-new-building">
          <div className="field is-horizontal">
            <div className="add-new-building-address">
              <div className="column">
                <div className="field-body">
                  <div className="field is-expanded">
                    <p className="control is-expanded has-icons-left">
                      <input
                        className="input"
                        type="text"
                        placeholder="building's address"
                        value={address}
                        onChange={makeOnChange(setAddress)}
                      />
                      <span className="icon is-small is-left">
                        <i className="far fa-building" />
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="column">
              <div className="field">
                <p className="control is-expanded">
                  <input
                    className="input"
                    type="text"
                    placeholder="city"
                    value={city}
                    onChange={makeOnChange(setCity)}
                  />
                </p>
              </div>
            </div>
            <div className="column">
              <div className="field">
                <p className="control is-expanded">
                  <input
                    className="input"
                    type="text"
                    placeholder="state"
                    value={state}
                    onChange={makeOnChange(setState)}
                  />
                </p>
              </div>
            </div>
            <div className="column">
              <div className="field">
                <p className="control is-expanded">
                  <input
                    className="input"
                    type="text"
                    placeholder="zipcode"
                    value={zipcode}
                    onChange={makeOnChange(setZipcode)}
                  />
                </p>
              </div>
            </div>
            <div className="column">
              <div className="field">
                <p className="control is-expanded">
                  <input
                    className="input"
                    type="text"
                    placeholder="optional photo"
                    value={buildingUrl}
                    onChange={makeOnChange(setBuildingUrl)}
                  />
                </p>
              </div>
            </div>
            <div className="column">
              <div className="field">
                <div className="control">
                  <button className="button is-primary" type="submit">
                    Add New Property
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
