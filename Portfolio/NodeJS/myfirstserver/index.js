const express = require('express')
const cors = require('cors')
const { ftruncateSync } = require('fs')

const app = express()
app.use(cors())

const myProfile = {
  name: 'Ebony'
}

const facts = [
  'My favourite colour is pink',
  'I like having salmon for dinner',
  'Currently I am part of The Black Codher Bootcamp',
  'I drive a MINI Paceman John Cooper Works'
]

app.get('/', (req, res) => {
  res.json({message: 'Code Is Frustrating'})
})

app.get('/about-me', (req, res) => {
  const randomIndex = Math.floor(Math.random
    () * facts.length)
    const randomFact = facts[randomIndex]
  res.json({
    ...myProfile,
    fact: randomFact
  })
})

app.listen(4000, () => {
  console.log('The Black Codher')
})