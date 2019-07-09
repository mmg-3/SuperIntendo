import React, {useState} from 'react'
import {connect} from 'react-redux'
import {createNewsThunk} from '../../store/resident'
import {makeOnChange, TextField} from '../utils'

export const NewsNew = props => {
  const [title, setTitle] = useState()
  const [body, setBody] = useState()
  const [file, setFile] = useState()
  const date = new Date()
  let month = '' + (date.getMonth() + 1)
  month = month.length === 1 ? '0' + month : month
  let day = '' + date.getDate()
  day = day.length === 1 ? '0' + day : day
  const dateString = `${date.getFullYear()}-${month}-${day}`
  const [expDay, setExpDay] = useState(dateString)

  const onSubmit = event => {
    event.preventDefault()
    props.createNews({
      title,
      body,
      file,
      expDay
    })
    setTitle()
    setBody()
    setFile()
    setExpDay(dateString)
  }
  if (props.message !== '') {
    return <div>{props.message}</div>
  }
  return (
    <div>
      <form onSubmit={onSubmit} className="form-ticket">
        <div className="field is-horizontal">
          <div className="field-label is-normal">
            <label className="label">Title</label>
          </div>
          <div className="field-body">
            <div className="field">
              <div className="control">
                <input
                  className="textarea"
                  placeholder="summarize this post in 5 words"
                  name="title"
                  type="text"
                  onChange={makeOnChange(setTitle)}
                  value={title}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="field is-horizontal">
          <div className="field-label is-normal">
            <label className="label">Content</label>
          </div>
          <div className="field-body">
            <div className="field">
              <div className="control">
                <textarea
                  className="textarea"
                  placeholder="please describe the news in detail, do not forget to include your apartment number"
                  name="body"
                  label="Content"
                  type="text"
                  onChange={makeOnChange(setBody)}
                  value={body}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="field is-horizontal">
          <div className="field-label is-normal">
            <label className="label">Expiration</label>
          </div>
          <div className="field-body">
            <div className="field">
              <div className="control">
                <input
                  name="expDay"
                  type="date"
                  onChange={makeOnChange(setExpDay)}
                  value={expDay}
                />
              </div>
              <p className="help">the post will be deleted on expiry date</p>
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
                      label="Photo"
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
                      need to enable file name display
                    </span>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="field is-horizontal">
          <div className="field-label">
            <br />
          </div>
          <div className="field-body">
            <div className="field">
              <div className="control">
                <button className="button is-primary" type="submit">
                  Create Post
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    message: state.resident.newsMessage
  }
}

const mapDispatchToProps = dispatch => {
  return {
    createNews: news => {
      dispatch(createNewsThunk(news))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewsNew)
