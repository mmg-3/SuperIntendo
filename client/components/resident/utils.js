import React from 'react'

export const TextField = props => {
  const disabled = props.disabled === undefined ? false : props.disabled
  return (
    <span>
      <label htmlFor={props.name}>{props.label}:</label>
      <input
        {...props}
        disabled={disabled}
        name={props.name}
        type={props.type}
        value={props.value}
        onChange={props.onChange}
        placeholder={props.value}
      />
    </span>
  )
}
