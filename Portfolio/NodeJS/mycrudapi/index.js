// Getting Libraries
const express = require('express')
const cors = require('cors')

// Using Libraries
const app = express()
app.use(cors())

// Parsing application/JSON
app.use(express.json())

// Profile/Book Objects
const profile = {
  forname: "Ebony",
  surname: "Gordon",
  age: 40,
  location: "Birmingham"
}

const book = {
  title: "Queenie",
  author: "Candice Carty-Williams",
  published: 2017,
  price: "£8.99"
}

// Database IDs
const db = {
  profiles: {
    001: profile,
  },
  books: {
    01: book
  },
}

// Read Existing Data
app.get('/profiles', (req, res) => {
  res.status(200).json({
    status: 'success',
    data: db.profiles
  })
})

app.get('/books', (req, res) => {
  res.status(200).json({
    status: 'success',
    data: db.books
  })
})

//Add New Data (including fucntion to assign new IDs in corresponding order)
app.post('/profiles', (req, res) => {

  const existingIds = Object.keys(db.profiles)
  const largestId = Math.max(...existingIds)
  const newId = largestId + 1

  db.profiles[newId] = req.body

  res.status(201).json({
    status: 'success',
    message: `New profile created with id of ${newId}`
  })
})

app.post('/books', (req, res) => {

  const existingIds = Object.keys(db.books)
  const largestId = Math.max(...existingIds)
  const newId = largestId + 1

  db.books[newId] = req.body

  res.status(201).json({
    status: 'success',
    message: `New book created with id of ${newId}`
  })
})

// Local Host URL
app.listen(4000, () => {
  console.log('Server Running')
})