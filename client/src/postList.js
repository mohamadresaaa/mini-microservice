import { useEffect, useState } from "react"
import axios from 'axios'
import CommentCreate from "./commentCreate"
import CommentList from "./commentList"

const PostList = () => {
  const [posts, setPosts] = useState({})

  const getPosts = async () => {
    const res = await axios.get('http://localhost:3003/posts')

    setPosts(res.data)
  }

  useEffect(() => {
    getPosts()
  },[])

  const renderPosts = Object.values(posts).map(post => {
    return (
      <div className="p-4 border-2" key={post.id}>
        <h3 className="font-bold capitalize">{post.title}</h3>
        <CommentList comments={post.comments}/>
        <CommentCreate postId={post.id}/>
      </div>
    )
  })

  console.log(renderPosts)

  return (
    <>
      <h2 className="font-bold text-xl mb-2">Posts</h2>
      <div className="grid grid-cols-3 gap-5">
        {renderPosts}
      </div>
    </>
  )
}

export default PostList