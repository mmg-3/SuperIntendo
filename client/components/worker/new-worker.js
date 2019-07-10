import React, {useState} from 'react'
import {connect} from 'react-redux'
import {createWorker} from '../../store/worker'
import '../css/worker/new-worker.scss'
import {makeOnChange} from '../utils'

export const NewWorker = props => {
  const [firstName, setFirstName] = useState(props.firstName)
  const [lastName, setLastName] = useState(props.lastName)
  const [phoneNumber, setPhoneNumber] = useState(props.phoneNumber)
  const [file, setFile] = useState()
  const [mailingAddress1, setMailingAddress1] = useState(props.mailingAddress1)
  const [mailingAddress2, setMailingAddress2] = useState(props.mailingAddress2)
  const [city, setCity] = useState(props.city)
  const [state, setState] = useState(props.state)
  const [zipcode, setZipcode] = useState(props.zipcode)
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
      file,
      mailingAddress1,
      mailingAddress2,
      city,
      state,
      zipcode,
      phoneNumber,
      skills
    })
  }
  return (
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
                    onChange={makeOnChange(setFirstName)}
                  />
                </div>
                <div className="field">
                  <input
                    className="input"
                    type="text"
                    placeholder="First Name"
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
                        placeholder="Your phone number"
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
                          onChange={e => setFile(e.target.files[0])}
                        />
                        <span className="file-cta">
                          <span className="file-icon">
                            <i className="fas fa-upload" />
                          </span>
                          <span className="file-label">Choose a file…</span>
                        </span>
                        <span className="file-name">
                          {(file && file.name) || 'image'}
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
                    value={mailingAddress1}
                    onChange={makeOnChange(setMailingAddress1)}
                  />
                </div>
                <div className="field">
                  <input
                    className="input"
                    type="text"
                    placeholder="Apt No."
                    value={mailingAddress2}
                    onChange={makeOnChange(setMailingAddress2)}
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
                <label className="label">Skills</label>
              </div>
              <div className="field-body">
                <div className="field is-narrow">
                  <div className="control">
                    <p className="help">
                      please select applicable skills you are qualified in{' '}
                    </p>
                    {possibleSkills.map(skill => (
                      <label className="checkbox" key={skill}>
                        <input
                          type="checkbox"
                          value={skills.includes(skill)}
                          onClick={() => toggleSkill(skill)}
                        />
                        {skill}
                      </label>
                    ))}
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
  )
}

const mapStateToProps = state => ({
  user: state.user
})
const mapDispatchToProps = dispatch => ({
  createWorker: worker => dispatch(createWorker(worker))
})

export default connect(mapStateToProps, mapDispatchToProps)(NewWorker)
