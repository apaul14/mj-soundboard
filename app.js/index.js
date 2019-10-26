const express = require('express')
const path = require('path')
const volleyball = require('volleyball')

const app = express()

app.use(express.static(path.join(__dirname, 'public')))

app.use('*', (req, res, next) => {
  try {
    res.sendFile()
  } catch (error) {
    next(error)
  }
})


app.use((err, req, res, next) => {
  console.log(err.stack)
  res.status(err.status || 500).send(err.message || 'Internal server error')
})