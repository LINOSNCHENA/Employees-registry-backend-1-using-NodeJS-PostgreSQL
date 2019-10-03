const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const de = require('./seEmployees')
const dc = require('./seContacts')
const df = require('./seFamily')
const port = 6060

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true, }))

app.get('/', (request, response) => {
response.json({ info: 'WELCOME TO EMPLOYEES INVENTORY 2019' })})

app.get('/employees', de.getEmployees)            // Route #1
app.get('/employees/:id1', de.getEmployee)        // Route #2
app.delete('/employees/:id1', de.deleteEmployee)  // Route #3
app.put('/employees/:id', de.updateEmployee)      // Route #4
app.post('/employees', de.createEmployee)         // Route #5

app.get('/contacts', dc.getContacts)                // Route #1
app.get('/contacts/:id2', dc.getContact)            // Route #2
app.delete('/contacts/:id2', dc.deleteContact)      // Route #3
app.put('/contacts/:id2', dc.updateContact)         // Route #4
app.post('/contacts/:d1', dc.createContact)         // Route #5

app.get('/family', df.getFamilys)                // Route #1
app.get('/family/:id3', df.getFamily)            // Route #2
app.delete('/family/:id3', df.deleteFamily)      // Route #3
app.put('/family/:id3', df.updateFamily)         // Route #4
app.post('/family/:d1', df.createFamily)         // Route #5

app.listen(port, () => {  console.log(`App running on port ${port}.`)})