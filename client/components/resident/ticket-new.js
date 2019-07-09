import React, {useState} from 'react'
import {connect} from 'react-redux'
import {createTicketThunk} from '../../store/resident'
import {makeOnChange, TextField} from '../utils'

const TicketNew = props => {
  const [issue, setIssue] = useState()
  const [location, setLocation] = useState('kitchen')
  const date = new Date()
  let month = '' + (date.getMonth() + 1)
  month = month.length === 1 ? '0' + month : month
  let day = '' + date.getDate()
  day = day.length === 1 ? '0' + day : day
  const dateString = `${date.getFullYear()}-${month}-${day}`
  const [formDate, setDate] = useState(dateString)
  const [neighbor, setNeighbor] = useState(false)
  const [file, setFile] = useState()

  const onSubmit = event => {
    event.preventDefault()
    props.createTicket({
      issue,
      location,
      formDate,
      neighbor,
      file
    })
    setIssue()
    setLocation('kitchen')
    setDate(dateString)
    setNeighbor(false)
    setFile()
  }

  return (
    <div>
      <form>
        <div className="field is-horizontal">
          <div className="field-label is-normal">
            <label className="label">Where</label>
          </div>
          <div className="field-body">
            <div className="field is-narrow">
              <div className="control">
                <div className="select is-fullwidth">
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
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="field is-horizontal">
          <div className="field-label">
            <label className="label">Neighbor?</label>
          </div>
          <div className="field-body">
            <div className="field is-narrow">
              <div className="control">
                <label className="radio">
                  <input
                    type="radio"
                    name="neighbor-involvement"
                    label="Yes"
                    value={neighbor}
                    onChange={e => setNeighbor(e.target.checked)}
                  />
                  Yes
                </label>
                <label className="radio">
                  <input type="radio" name="member" />
                  No
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="field is-horizontal">
          <div className="field-label is-normal">
            <label className="label">When</label>
          </div>
          <div className="field-body">
            <div className="field">
              <div className="control">
                <input
                  name="formDate"
                  type="date"
                  onChange={makeOnChange(setDate)}
                  max={dateString}
                  value={formDate}
                />
              </div>
              <p className="help">when did this issue first occur?</p>
            </div>
          </div>
        </div>
        <div className="field is-horizontal" />
        <div className="field is-horizontal" />
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
