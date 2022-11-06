const express = require('express')
const bodyParser = require('body-parser')
const { randomBytes } = require('crypto')
const cors = require('cors')
const axios = require('axios')

const app = express()
const comments = {}

app.use(bodyParser.json())
app.use(cors())

app.get('/posts/:id/comments', (req, res) => {
  res.send(comments[req.params.id] || [])
})

app.post('/posts/:id/comments', async (req, res) => {
  const postId = req.params.id
  const commentId = randomBytes(4).toString('hex')

  const { content } = req.body

  const newComment = comments[postId] || []

  newComment.push({
    id: commentId,
    content
  })

  comments[postId] = newComment

  await axios.post('http://localhost:3003/events', {
    type: 'commentCreated',
    data: {
      id: commentId, content, postId
    }
  })

  res.status(201).send(newComment)
})


app.listen(3002, () => console.log('comment server running on port 3002'))