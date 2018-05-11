import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'

import renderField from './renderFormField'
import validate from './formValidate'

class PostNew extends Component {

  render() {
    return (
      <form>
        <Field 
          label="Title"
          name="title"
          mark="input" 
          type="text"
          component={renderField} 
        />
        <Field 
          label="Categories"
          name="categories"
          mark="input"  
          type="text"
          component={renderField} 
        />
        <Field 
          label="Content"
          name="content"
          mark="textarea" 
          component={renderField} 
        />
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    )
  }
}

export default reduxForm({
  validate,
  form: 'PostNewForm'
})(PostNew)