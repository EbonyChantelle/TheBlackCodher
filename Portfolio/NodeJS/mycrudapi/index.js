const express = require('express')
const cors = require('cors')

const app = express()
app.use(cors())
app.use(express.json())

const profile = {
  forname: "Ebony",
  surname: "Gordon",
  age: 40,
  location: "Birmingham"
}

const book = {
  title: "Queenie",
  author: "Candice Carty-Williams",
  description: "A funny, clever, heartbreaking lightning bolt of a novel",
  price: "£4.99"
}

const db = {
  profiles: {
    001: profile,
  },
  books: {
    01: book
  },
}

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

app.listen(4000, () => {
  console.log('Server Running')
})