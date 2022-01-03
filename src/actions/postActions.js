import { FETCH_POSTS, NEW_POST } from './types'

export const fetchPosts = () => dispatch => {
  console.log('> action.fetch_posts')
  fetch('https://jsonplaceholder.typicode.com/posts')
  .then(res => res.json())
  .then(data => 
    dispatch({
      type: FETCH_POSTS,
      payload: data
    })
  )
}

export const createPost = (data) => dispatch => {
  console.log('> action.create_post')
  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  .then(resp => resp.json())
  .then(data => 
    dispatch({
      type: NEW_POST,
      payload: data
    })
  )
}