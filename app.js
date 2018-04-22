const express = require('express')
const app = express() 
const port = process.env.PORT || 3000 // use the environment variable (eg. from Heroku) or port 3000
const bodyParser = require('body-parser')
const morgan = require('morgan')
const cors = require('cors')

app.disable('x-powered-by')
if(process.env.NODE_ENV === 'development')
app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(cors()) // allows us to make AJAX requests to another site from our javascript

const movieRoutes = require('./src/routes/movies')
app.use('/movies', movieRoutes)

app.use((err, req, res, next) => {
  console.error(err.stack) // log an error message
  const status = err.status || 500 
  res.status(status).json({ error: err}) // 404 with an error message to the client 
})

app.listen(port, () => {
  console.log(`Listening on port ${port}!`)
})

module.exports = app 