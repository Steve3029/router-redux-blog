import axios from 'axios'

export const FETCH_POSTS = 'FETCH_POSTS'

const base_url = 'http://reduxblog.herokuapp.com/api'
const api_key = 'octopus1001'

export function fetchPosts() {
  const request = axios.get(`${base_url}/posts`, {
    params: {
      key: api_key
    }
  })

  return {
    type: FETCH_POSTS,
    payload: request
  }
}