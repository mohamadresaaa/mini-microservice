const express = require('express')
const bodyParser = require('body-parser')
const { randomBytes } = require('crypto')

const app = express()
const comments = {}

app.use(bodyParser.json())

app.get('/posts/:id/comments', (req, res) => {
  res.send(comments[req.params.id] || [])
})

app.post('/posts/:id/comments', (req, res) => {
  const commentId = randomBytes(4).toString('hex')

  const { content } = req.body

  const newComment = comments[req.params.id] || []

  newComment.push({
    id: commentId,
    content
  })

  comments[req.params.id] = newComment

  res.status(201).send(newComment)
})


app.listen(3001, () => console.log('comment server running on port 3001'))