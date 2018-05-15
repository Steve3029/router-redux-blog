import axios from 'axios'

export const FETCH_POSTS = 'FETCH_POSTS'
export const CREATE_POST = 'CREATE_POST'

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

export function createPost(values, callback) {
  const request = axios.post(`${base_url}/posts?key=${api_key}`, values)
    .then(() => callback())

  return {
    type: CREATE_POST,
    payload: request
  }
}