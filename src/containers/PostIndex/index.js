import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
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

function mapPropsToDidpatch(dispatch) {
  return {
    fetchPosts: bindActionCreators(fetchPosts, dispatch)
  }
}

export default connect(null, mapPropsToDidpatch)(PostIndex)