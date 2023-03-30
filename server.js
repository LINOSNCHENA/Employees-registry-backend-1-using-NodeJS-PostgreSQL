const express = require('express')
const bodyParser = require('body-parser')
const app = express()

const de = require('./xloans')
const dc = require('./xEmployees')
const df = require('./xclients')
const port = 3030

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true, }))

app.get('/', (request, response) => {
response.json({ info: ' WELCOME TO STUDENT REGISTRATION PORTAL 2019' })})

app.get('/tloans', de.getLoans)            // Route #1
app.get('/tloans/:id1', de.getLoan)        // Route #2
app.delete('/tloans/:id1', de.deleteLoan)  // Route #3
app.put('/tloans/:id', de.updateLoan)      // Route #4
app.post('/tloans', de.createLoan)         // Route #5

app.get('/temployees', dc.getEmployees)                // Route #1
app.get('/temployees/:id2', dc.getEmployee)            // Route #2
app.delete('/temployees/:id2', dc.deleteEmployee)      // Route #3
app.put('/temployees/:id2', dc.updateEmployee)         // Route #4
app.post('/temployees/:d1', dc.createEmployee)         // Route #5

app.get('/tclients', df.getClientss)                // Route #1
app.get('/tclients/:id3', df.getClients)            // Route #2
app.delete('/tclients/:id3', df.deleteClients)      // Route #3
app.put('/tclients/:id3', df.updateClients)         // Route #4
app.post('/tclients/:d1', df.createClients)         // Route #5

app.listen(port, () => {  console.log(`Postgresql server #3 is running on port ${port}.`)})
