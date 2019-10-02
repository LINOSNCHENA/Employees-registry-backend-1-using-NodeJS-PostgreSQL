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


app.get('/employees', db.getEmployees)
app.get('/employees/:id', db.getEmployee)
app.post('/employees', db.createEmployee)
app.put('/employees/:id', db.updateEmployee)
app.delete('/employees/:id', db.deleteEmployee)

app.listen(port, () => {  console.log(`App running on port ${port}.`)})