import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { fetchSignlePost, deletePost } from '../../actions'
import { connect } from 'react-redux'

class PostShow extends Component {
  componentDidMount() {
    const { id } = this.props.match.params
    this.props.fetchSignlePost(id)
  }

  onDeleteClick() {
    const { id } = this.props.match.params
    this.props.deletePost(id, () => {
      this.props.history.push('/')
    })
  }

  render () {
    const { post } = this.props
    if (!post) {
      return <div>Loading...</div>
    }
    return (
      <div>
        <Link to="/">Back to Index</Link>
        <button 
          className="btn btn-danger float-right" 
          onClick={this.onDeleteClick.bind(this)}
        >
          Delete Post
        </button>
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

export default connect(mapStateToProps, { fetchSignlePost, deletePost })(PostShow)