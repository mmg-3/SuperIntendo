import React, {useState} from 'react'
import {TextField} from './utils'

export const TicketForm = props => {
  const date = new Date()
  const dateString = `${date.getFullYear()}-${date.getMonth() +
    1}-${date.getDate()}`

  const [location, setLocation] = useState(props.location)
  const [formDate, setDate] = useState(props.date)
  const [issue, setIssue] = useState(props.issue)
  const [neighbor, setNeighbor] = useState(props.neighborInvolved)

  return (
    <div>
      <form>
        <select name="location">
          <option value="bedroom">Bedroom</option>
          <option value="kitchen">Kitchen</option>
          <option value="bathroom">Bathroom</option>
          <option value="dining-room">Dining Room</option>
          <option value="living-room">Living Room</option>
          <option value="other">Other</option>
        </select>
        <TextField
          name="first-occurence"
          label="When did it happen?"
          type="date"
          max={dateString}
          value={formDate}
        />
        <TextField
          name="issue"
          label="Describe the issue"
          type="text"
          placeholder="The sink in the kitchen is leaking"
          value={issue}
        />
        Does this involve your neighbor?
        <TextField
          name="neighbor-involvement"
          label="Yes"
          value={neighbor}
          type="checkbox"
        />
      </form>
    </div>
  )
}
