import PropTypes from 'prop-types'
import { useEffect, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchPosts } from '../actions/postActions'

const Posts = () => {
  const dispatch = useDispatch()
  const posts = useSelector(state => state.posts.items)
  const newPost = useSelector(state => state.posts.item)
  let newPostsRef = useRef([]) // due to jsonplaceholder not updating on POST
  let newPostIdRef = useRef(101) // due to jsonplaceholder not updating on POST
  const renderPosts = posts => posts.map(
    post => (
      <div key={post.id} className="my-5">
        <h3 className="text-lg font-bold my-2">{post.title}</h3>
        <p>{post.body}</p>
      </div>
    )
  )
  useEffect(() => {
    if (newPost) {
      // due to jsonplaceholder not updating on POST
      newPostIdRef.current += 1
      let localPost = newPost
      localPost.id = newPostIdRef.current
      newPostsRef.current.unshift(localPost)
    }
    dispatch(fetchPosts())
  }, [dispatch, newPost])
  const postItems = renderPosts([...newPostsRef.current, ...posts])
  return (
    <div className="container mx-auto w-1/2">
      <h1 className="text-3xl font-bold  my-7">Posts</h1>
      {postItems}
    </div>
  )
}

export default Posts
