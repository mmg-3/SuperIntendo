import React, {useState} from 'react'
import {connect} from 'react-redux'
import {createWorker} from '../../store/worker'
import {makeOnChange, TextField} from '../resident/utils'

export const NewWorker = props => {
  const [firstName, setFirstName] = useState(props.firstName)
  const [lastName, setLastName] = useState(props.lastName)
  const [phoneNumber, setPhoneNumber] = useState(props.phoneNumber)
  const [imageUrl, setImageUrl] = useState(props.imageUrl)
  const [mailingAddress, setMailingAddress] = useState(props.mailingAddress)
  const [skills, setSkills] = useState([])

  const possibleSkills = [
    'General Basics',
    'Plumbing',
    'HVAC & Electrical Systems',
    'Appliances',
    'Painting',
    'Carpentry',
    'Structural'
  ]

  const toggleSkill = skill => {
    const idx = skills.indexOf(skill)
    if (idx === -1) {
      setSkills([...skills, skill])
    } else {
      setSkills([...skills.slice(0, idx), ...skills.slice(idx + 1)])
    }
  }

  const onSubmit = evt => {
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
          <label>Skills</label>
          <sub>Please select applicable skills</sub>
          <ul style={{listStyle: 'none'}}>
            {possibleSkills.map(skill => (
              <li key={skill}>
                <input
                  type="checkbox"
                  value={skills.includes(skill)}
                  onClick={() => toggleSkill(skill)}
                />
                {skill}
              </li>
            ))}
          </ul>
        </div>
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
