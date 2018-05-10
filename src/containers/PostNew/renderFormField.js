import React from 'react'

const renderField = ({label, type, input, mark: As, ...props}) => {
  return (
    <div className="form-group">
      <label>{label}</label>
      <As 
        className="form-control"
        type={type}
        {...input}
      />
      {props.meta.error}
    </div>
  )
}

export default renderField