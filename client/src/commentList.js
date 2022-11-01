import axios from 'axios'
import { useEffect, useState } from "react"

const CommentList = ({ postId }) => {
  const [comments, setComments] = useState([])

  const getComments = async () => {
    const res = await axios.get(`http://localhost:3002/posts/${postId}/comments`)
    setComments(res.data)
  }

  useEffect(() => {
    getComments()
  },[])

  return (
    <ol class="list-decimal m-5">
      {comments.map(comment => (
        <li key={comment.id}>
          {comment.content}
        </li>
      ))}
    </ol>
  )
}

export default CommentList