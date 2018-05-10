import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'

class PostNew extends Component {
  renderField({label, type, input, mark: As, ...props}) {
    return (
      <div className="form-group">
        <label>{label}</label>
        <As 
          className="form-control"
          type={type}
          {...input}
        />
      </div>
    )
  }

  render() {
    return (
      <form>
        <Field 
          label="Title"
          name="title"
          mark="input" 
          type="text"
          component={this.renderField} 
        />
        <Field 
          label="Categories"
          name="Categories"
          mark="input"  
          type="text"
          component={this.renderField} 
        />
        <Field 
          label="Content"
          name="content"
          mark="textarea" 
          component={this.renderField} 
        />
      </form>
    )
  }
}

export default reduxForm({
  form: 'PostNewForm'
})(PostNew)