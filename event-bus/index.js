const express = require("express")
const bodyParser = require("body-parser")
const axios = require("axios")

const app = express()
app.use(bodyParser.json())

app.post("/events", (req, res) => {
  const event = req.body

  axios.post("http://localhost:3000/events", event)
  axios.post("http://localhost:3001/events", event)
  axios.post("http://localhost:3003/events", event)
  res.send({ status: "Success" })
})

app.listen(3002, () => (console.log("server running on port 3002")))