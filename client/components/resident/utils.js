import React from 'react'

export const makeOnChange = setter => event => setter(event.target.value)

export const TextField = props => {
  const disabled = props.disabled === undefined ? false : props.disabled
  return (
    <div>
      <label htmlFor={props.name}>{props.label}:</label>
      <input
        {...props}
        disabled={disabled}
        name={props.name}
        type={props.type}
        value={props.value || ''}
        onChange={props.onChange}
      />
    </div>
  )
}
