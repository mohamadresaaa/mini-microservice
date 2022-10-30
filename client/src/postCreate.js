import React, { useState } from "react";
import axios from 'axios'

export default function CreatePost() {
  const [title, setTitle] = useState('')

  const createPostHandle = async (e) => {
    e.preventDefault()

    const res = await axios.post('http://localhost:3000/posts', {
      title
    })

    setTitle('')
  }
 
  return (
    <div className="border-2 p-4 m-5">
      <h2 className="text-base">Create new post</h2>
      <form onSubmit={createPostHandle} className="flex mt-3">
        <div className="flex items-center w-full">
          <label className="text-base text-black mr-5" htmlFor="title">Title</label>
          <input value={title} onChange={(e) => (setTitle(e.target.value))} name="title" id="title" className="px-3 py-3 placeholder-slate-300 text-slate-600  bg-white rounded text-sm border-2 shadow outline-none focus:outline-none focus:ring w-full" />
          <button type="submit" className="bg-blue-700 text-white p-3 rounded ml-5">Create</button>
        </div>
      </form>
    </div>
  )
}

