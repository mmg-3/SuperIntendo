import React, {useState} from 'react'
import {makeOnChange, TextField} from './utils'

export const NewsNew = props => {
  const [title, setTitle] = useState(props.title)
  const [body, setBody] = useState(props.body)
  const [photo, setPhoto] = useState(props.photoUrl)
  const [expDay, setExpDay] = useState(props.expDay)

  return (
    <div>
      <form onSubmit={props.handleSubmit}>
        <TextField
          name="title"
          label="Title"
          type="text"
          value={title}
          onChange={makeOnChange(setTitle)}
        />
        <TextField
          name="body"
          label="Content"
          type="text"
          value={body}
          onChange={makeOnChange(setBody)}
        />
        <TextField
          name="expDay"
          label="exires in ... days"
          type="number"
          value={expDay}
          min="1"
          max="28"
          step="1"
          onChange={makeOnChange(setExpDay)}
        />
        <button type="submit">Send</button>
      </form>
    </div>
  )
}
