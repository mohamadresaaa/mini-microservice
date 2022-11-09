const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()
app.use(bodyParser.json())
app.use(cors())

const posts = {}


app.get('/posts', (req, res) => {
  res.send(posts)
})

app.post('/events', (req, res) => {
  const { type, data } = req.body

  if (type === 'postCreated') {
    const { id, title } = data

    posts[id] = {
      id, title, comments: []
    }
  }
    
  if (type === 'commentCreated') {
    const { id, content, postId } = data

    const post = posts[postId]
    post.comments.push({ id, content })
  }
    
  res.send({ status: 'Success' })
})

app.listen(3003, () => 
  console.log('server running on port 3003')
)