const connectToMongo = require('./db')

const express = require('express')
var cors = require('cors')
const app = express()
const port = 3000

app.use(express.json())
app.use(cors())

app.use('/api/auth',require('./routes/auth'))
app.use('/api/notes',require('./routes/notes'))
app.get('/v1/login', (req, res) => {
    res.send('Hello login!')
  })

  app.get('/v1/signup', (req, res) => {
    res.send('Hello Signup!')
  }) 
app.listen(port, () => {
    console.log(`Example app listening on localhost:${port}`)

})

connectToMongo()