import React, { Component } from 'react'
import { connect } from 'react-redux'

import { fetchPosts } from '../../actions'

class PostIndex extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchPosts()
  }

  render() {
    return (
      <div>
        Post Index Page
      </div>
    )
  }
}

export default connect(null, { fetchPosts })(PostIndex)