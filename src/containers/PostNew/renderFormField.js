import React from 'react'

const renderField = ({label, type, input, mark: As, meta: {touched, error}, ...props}) => {
  return (
    <div className="form-group">
      <label>{label}</label>
      <As 
        className="form-control"
        type={type}
        {...input}
        required
      />
      <div>
        {touched && error}
      </div>
    </div>
  )
}

export default renderField