import React, {useState} from 'react'
import {makeOnChange, TextField} from '../utils'
export const BuildingForm = props => {
  const [address, setAddress] = useState(props.address)

  const onSubmit = event => {
    event.preventDefault()
    props.handleSubmit({
      address
    })
    setAddress('')
  }
  return (
    <div>
      <form onSubmit={onSubmit}>
        <TextField
          name="address"
          label="Address:"
          type="text"
          value={address}
          onChange={makeOnChange(setAddress)}
        />

        <button type="submit" onSubmit={onSubmit}>
          Add Building
        </button>
      </form>
    </div>
  )
}
