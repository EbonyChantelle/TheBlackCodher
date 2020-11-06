const express = require('express')
const cors = require('cors')

const app = express()
app.use(cors())
app.use(express.json())

app.listen(4000, () => {
  console.log('Server Running')
})