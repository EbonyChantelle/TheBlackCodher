const express = require('express')
const cors = require('cors')

const app = express()
app.use(cors())

const me = {
  name: 'Ebony',
  colour: 'Pink',
  food: 'Salmon'
}

app.get('/', (req, res) => {
  res.json({message: 'Code Is Frustrating'})
})

app.get('/about-me', (req, res) => {
  res.json(me)
})

app.listen(4000, () => {
  console.log('The Black Codher')
})