const express = require('express')
const { randomBytes } = require('crypto')
const bodyParser = require('body-parser')
const cors = require('cors')
const axios = require('axios')

const app = express()

app.use(bodyParser.json())

app.use(cors())

const posts = {}

app.get('/posts', (req, res) => {
  res.send(posts)
})

app.post('/posts', async (req, res) => {
  const id = randomBytes(4).toString('hex')
  const { title } = req.body

  posts[id] = {
    id, title
  }

  await axios.post('http://localhost:3002/events', {
    type: 'postCreated',
    data: {
      id, title
    }
  })

  res.status(201).send(posts[id])
})

app.post('/events', (req, res) => {
  const event = req.body.type
})

app.listen(3000, () => console.log('post server running on port 3000'))