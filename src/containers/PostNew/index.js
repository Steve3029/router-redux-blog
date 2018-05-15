import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import renderField from './renderFormField'
import validate from './formValidate'
import { createPost } from '../../actions'

import './style.css'

class PostNew extends Component {
  onSubmit(values) {
    this.props.createPost(values, () => {
      this.props.history.push('/')
    })
  }

  render() {
    const { handleSubmit } = this.props
    return (
      <form className="needs-validation" noValidate onSubmit={handleSubmit(this.onSubmit.bind(this))} >
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
        {' '}
        <Link to="/" className="btn btn-danger">Cancel</Link>
      </form>
    )
  }
}

export default reduxForm({
  validate,
  form: 'PostNewForm'
})(
  connect(null, {createPost})(PostNew)
)