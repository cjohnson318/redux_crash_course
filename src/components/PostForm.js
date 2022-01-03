import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createPost } from '../actions/postActions'

const PostForm = () => {
  const dispatch = useDispatch()
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const onSubmit = (e) => {
    e.preventDefault()
    const post = {title, body}
    dispatch(createPost(post))
    setTitle('')
    setBody('')
  }
  return (
    <div className="container mx-auto w-1/2 my-7">
      <h3 className="text-3xl font-bold my-5">Post Form</h3>
      <form onSubmit={onSubmit}>
        <div className="my-3">
          <label>Title:</label>
          <br/>
          <input type="text" name="title" value={title} onChange={(e) => setTitle(e.target.value)} className="border rounded w-full p-1" />
          <br/>
        </div>
        <div className="my-3">
          <label>Body:</label>
          <br/>
          <textarea name="body" value={body} onChange={(e) => setBody(e.target.value)} className="border rounded w-full p-1" />
          <br/>
        </div>
        <div className="my-3">
          <button type="submit" className="border rounded bg-slate-200 px-5 py-2">Submit</button>
        </div> 
      </form>
    </div>
  )
}

export default PostForm
