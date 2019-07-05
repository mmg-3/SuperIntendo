import React, {useState, useEffect} from 'react'
import {connect} from 'react-redux'
import {TextField, makeOnChange} from '../resident/utils'
import {createWorker} from '../../store/worker'

export const NewWorker = props => {
  useEffect(() => {}, [])
  const [firstName, setFirstName] = useState(props.firstName)
  const [lastName, setLastName] = useState(props.lastName)
  const [phoneNumber, setPhoneNumber] = useState(props.phoneNumber)
  const [imageUrl, setImageUrl] = useState(props.imageUrl)
  const [mailingAddress, setMailingAddress] = useState(props.mailingAddress)
  const [skills, setSkills] = useState(props.skills)

  const onSubmit = evt => {
    console.log('THE PROPS ON CLICK', props)
    evt.preventDefault()
    props.createWorker({
      firstName,
      lastName,
      imageUrl,
      mailingAddress,
      phoneNumber,
      skills
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
        {/* <br></br> */}
        <TextField
          required={true}
          name="mailingAddress"
          label="Mailing Address"
          type="text"
          value={mailingAddress}
          onChange={makeOnChange(setMailingAddress)}
        />
        {/* <br></br> */}
        <div>
          {/* <label>Skills</label>
        <sub>Please select applicable skills</sub>
        <ul style={{listStyle:"none"}}>
          <li><input
            type="checkbox"
            value={skills}
            onClick={makeOnChange(setSkills)}
          /> General Basics</li>
          <li><input
            type="checkbox"
            value={skills}
            onClick={makeOnChange(setSkills)}
          /> Plumbing</li>
          <li><input
            type="checkbox"
            value={skills}
            onClick={makeOnChange(setSkills)}
          /> HVAC and Electrical Systems</li>
          <li><input
            type="checkbox"
            value={skills}
            onClick={makeOnChange(setSkills)}
          /> Appliances</li>
          <li><input
            type="checkbox"
            value={skills}
            onClick={makeOnChange(setSkills)}
          /> Painting</li>
          <li><input
            type="checkbox"
            value={skills}
            onClick={makeOnChange(setSkills)}
          /> Carpentry</li>
          <li><input
            type="checkbox"
            value={skills}
            onClick={makeOnChange(setSkills)}
          /> Structural</li>
        </ul> */}
        </div>
        <TextField
          // required={true}
          name="skills"
          label="Skills"
          type="text"
          value={skills}
          onChange={makeOnChange(setSkills)}
        />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

const mapStateToProps = state => ({
  user: state.user
})
const mapDispatchToProps = dispatch => ({
  createWorker: worker => dispatch(createWorker(worker))
})

export default connect(mapStateToProps, mapDispatchToProps)(NewWorker)
