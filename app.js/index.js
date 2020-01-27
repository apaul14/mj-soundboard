const express = require('express')
const path = require('path')
const volleyball = require('volleyball')

const app = express()
const port = 3000


//app.use(express.static(path.join(__dirname, 'public')))




app.use((err, req, res, next) => {
  console.log(err.stack)
  res.status(err.status || 500).send(err.message || 'Internal server error')
})

// sends index.html
app.use(express.static(path.join(__dirname, "..", "public")))

// app.get('/', (req, res, next) => {
//   try {
//     res.status(200).send('Hello World!')
//   } catch (error) {
//     console.log(error)
//   }
// })



app.listen(port, () => console.log(`Soundboard ready on port ${port}!`))

module.exports = app