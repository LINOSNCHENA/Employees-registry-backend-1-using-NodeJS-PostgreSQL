const express = require('express')
const bodyParser = require('body-parser')
const app = express()

const de = require('./xworkers')
const dc = require('./xcontacts')
const df = require('./xfamily')
const port = 3030

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true, }))

app.get('/', (request, response) => {
response.json({ info: ' WELCOME TO STUDENT REGISTRATION PORTAL 2019' })})

app.get('/xworkers', de.getEmployees)            // Route #1
app.get('/xworkers/:id1', de.getEmployee)        // Route #2
app.delete('/xworkers/:id1', de.deleteEmployee)  // Route #3
app.put('/xworkers/:id', de.updateEmployee)      // Route #4
app.post('/xworkers', de.createEmployee)         // Route #5

app.get('/xcontacts', dc.getContacts)                // Route #1
app.get('/xcontacts/:id2', dc.getContact)            // Route #2
app.delete('/xcontacts/:id2', dc.deleteContact)      // Route #3
app.put('/xcontacts/:id2', dc.updateContact)         // Route #4
app.post('/xcontacts/:d1', dc.createContact)         // Route #5

app.get('/xfamily', df.getFamilys)                // Route #1
app.get('/xfamily/:id3', df.getFamily)            // Route #2
app.delete('/xfamily/:id3', df.deleteFamily)      // Route #3
app.put('/xfamily/:id3', df.updateFamily)         // Route #4
app.post('/xfamily/:d1', df.createFamily)         // Route #5

app.listen(port, () => {  console.log(`Postgresql server #3 is running on port ${port}.`)})
