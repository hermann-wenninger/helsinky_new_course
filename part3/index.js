const express = require('express')
const app = express()

let persons = [
  {
    id: 1,
    name: "Hermann Wenninger",
    number: "015730991852"
  },
  {
    id: 2,
    name: "Franka Potente",
    number: "017667382910"
  },
  {
    id: 3,
    name: "Lucky Lucke",
    number: "1212345678"
  }
]

app.use(express.json())

app.get('/', (req, res) => {
  res.send('<h1>Hello World!</h1>')
})

app.get('/api/persons', (req, res) => {
  res.json(persons)
})



const generateId = () => {
  const maxId = persons.length > 0
    ? Math.max(...persons.map(n => n.id))
    : 0
  return maxId + 1
}

app.post('/api/persons', (request, response) => {
  const persons = request.body
  console.log(persons)
  response.json(persons)
})

const PORT = 3001
app.listen(PORT)
console.log(`Server running on port ${PORT}`)