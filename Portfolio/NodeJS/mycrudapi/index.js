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

// Read Existing Data/Read Matching Data (Otherwise Error)
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

app.get('/profiles/:profileId', (req, res) => {
  console.log(req.params.profileId)

  const matchingProfile = db.profiles[req.params.profileId]

  if (matchingProfile) {
    res.json({
      status: 'success',
      data: matchingProfile
    })
    
  } else {
    res.status(404).json({
      message: "Profile with that id not found"
    })
  }
})

app.get('/books/:bookId', (req, res) => {
  console.log(req.params.bookId)

  const matchingBook = db.books[req.params.bookId]

  if (matchingBook) {
    res.json({
      status: 'success',
      data: matchingBook
    })
    
  } else {
    res.status(404).json({
      message: "Book with that id not found"
    })
  }
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

// Amend Existing Data

app.patch('/profiles/:profileId', (req, res) => {

  db.profiles[req.params.profileId] = {
    ...db.profiles[req.params.profileId],
    ...req.body
  }

  res.status(200).json({
    messages: "Profile Updated"
  })
})

app.patch('/books/:bookId', (req, res) => {

  db.books[req.params.bookId] = {
    ...db.books[req.params.bookId],
    ...req.body
  }

  res.status(200).json({
    messages: "Book Updated"
  })
})

// Overwrite Existing Data

app.put('/profiles/:profileId', (req, res) => {
  const overwriteProfile = req.params.profileId

  db.profiles[overwriteProfile] = req.body

  res.status(200).json({
    message: "Profile Replaced"
  })
})

app.put('/books/:bookId', (req, res) => {
  const overwriteBook = req.params.bookId

  db.books[overwriteBook] = req.body

  res.status(200).json({
    message: "Book Replaced"
  })
})

// Delete Data

app.delete('/profiles/:profileId', (req, res) => {

  delete db.profiles[req.params.profileId]

  res.status(200).json({
    status: 'success',
    message: "Profile Deleted"
  })
})

// Local Host URL
app.listen(4000, () => {
  console.log('Server Running')
})