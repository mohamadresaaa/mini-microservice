import { useState } from "react"
import axios from 'axios'

const CommentCreate = ({ postId }) => {
  
  const [content, setContent] = useState('')

  const submitHandler = async (e) => {
    e.preventDefault()

    const res = await axios.post(`http://localhost:3001/posts/${postId}/comments`, {
      content
    })

    setContent('')
  }

  return (
    <div className="p-4 my-2 border-t-2">
      <h3 className="text-base">
        Add new comment
      </h3>
      <form onSubmit={submitHandler} className="flex mt-3">
        <div className="flex items-center w-full">
          <textarea rows={3} value={content} onChange={(e) => (setContent(e.target.value))} name="content" id="title" className="px-3 py-3 placeholder-slate-300 text-slate-600  bg-white rounded text-sm border-2 shadow outline-none focus:outline-none focus:ring w-full" />
          <button type="submit" className="bg-blue-700 text-white p-1 rounded ml-5">Send</button>
        </div>
      </form>
    </div>
  )
}

export default CommentCreate