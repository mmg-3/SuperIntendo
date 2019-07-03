import React, {useEffect, useState} from 'react'
import {connect} from 'react-redux'
import {createTicketThunk} from '../../store/resident'
import {TextField, makeOnChange} from './utils'

const TicketNew = props => {
  const [issue, setIssue] = useState('')
  const [location, setLocation] = useState('kitchen')
  const date = new Date()
  let month = '' + (date.getMonth() + 1)
  month = month.length === 1 ? '0' + month : month
  let day = '' + date.getDate()
  day = day.length === 1 ? '0' + day : day
  const dateString = `${date.getFullYear()}-${month}-${day}`
  const [formDate, setDate] = useState(dateString)
  const [neighbor, setNeighbor] = useState(false)
  const [photoUrl, setPhotoUrl] = useState('')

  const onSubmit = event => {
    event.preventDefault()
    props.createTicket({
      issue,
      location,
      formDate,
      neighbor,
      photoUrl
    })
    setIssue('')
    setLocation('kitchen')
    setDate(dateString)
    setNeighbor(false)
    setPhotoUrl('')
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <TextField
          name="issue"
          label="Describe the issue:"
          type="text"
          value={issue || ''}
          placeholder="The sink in the kitchen is leaking"
          onChange={makeOnChange(setIssue)}
        />
        <select
          name="location"
          onChange={makeOnChange(setLocation)}
          value={location}
        >
          <option value="bedroom">Bedroom</option>
          <option value="kitchen">Kitchen</option>
          <option value="bathroom">Bathroom</option>
          <option value="dining-room">Dining Room</option>
          <option value="living-room">Living Room</option>
          <option value="other">Other</option>
        </select>
        <div>
          Does this involve your neighbor?
          <TextField
            name="neighbor-involvement"
            label="Yes"
            value={neighbor}
            type="checkbox"
            onChange={e => setNeighbor(e.target.checked)}
          />
        </div>
        <TextField
          name="formDate"
          label="When did it happen?"
          type="date"
          onChange={makeOnChange(setDate)}
          max={dateString}
          value={formDate}
        />
        <TextField
          name="photoUrl"
          value={photoUrl}
          label="Photo URL"
          type="text"
          onChange={makeOnChange(setPhotoUrl)}
        />
        <button type="submit">Submit Ticket</button>
      </form>
    </div>
  )
}

const mapStateToProps = state => {
  return {}
}

const mapDispatchToProps = dispatch => {
  return {
    createTicket: ticket => {
      dispatch(createTicketThunk(ticket))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TicketNew)
