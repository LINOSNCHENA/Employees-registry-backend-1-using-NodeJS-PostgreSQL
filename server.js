const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const db = require('./routes')
const port = 6060

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true, }))

//Routes
app.get('/', (request, response) => {
response.json({ info: 'WELCOME TO DARK-MATTER PHYSICS SYMPOSIUM 2019' })})


app.get('/employees', db.getEmployees)            // Route #1
app.get('/employees/:id', db.getEmployee)         // Route #2
app.delete('/employees/:id', db.deleteEmployee)   // Route #3
app.put('/employees/:id', db.updateEmployee)      // Route #4
app.post('/employees', db.createEmployee)         // Route #5

app.listen(port, () => {  console.log(`App running on port ${port}.`)})