
const CommentList = ({ comments }) => {
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