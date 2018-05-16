import React, { Component } from 'react'
import { fetchSignlePost } from '../../actions'
import { connect } from 'react-redux'

class PostShow extends Component {
  componentDidMount() {
    const { id } = this.props.match.params
    this.props.fetchSignlePost(id)
  }

  render () {
    const { post } = this.props
    if (!post) {
      return <div>Loading...</div>
    }
    return (
      <div>
        <h3>{post.title}</h3>
        <h6>Categories: {post.categories}</h6>
        <p>{post.content}</p>
      </div>
    )
  }
} 

function mapStateToProps({posts}, ownProps) {
  return { post: posts[ownProps.match.params.id] }
}

export default connect(mapStateToProps, { fetchSignlePost })(PostShow)