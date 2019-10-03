const Pool = require('pg').Pool

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'presly',
  password: 'Monze2019@',
  port: 5432})

const getContacts = (request, response) => {                                 // GET ALL
pool.query('SELECT * FROM employeescontacts ORDER BY id2 ASC', (error, results) => {
      if (error) {  throw error      }
      response.status(200).json({
        status: 'success', 
        data: results.rows,
        message: 'Retrieved ALL comtacts' });
    })
  }

const getContact = (request, response) => {                                  // GET ONE
  const id = parseInt(request.params.id2)
  pool.query('SELECT * FROM employeescontacts WHERE id2 = $1', [id], (error, results) => {
      if (error) {        throw error      }
      response.status(200).json({
        status: 'success', 
        data: results.rows,
        message: 'Retrieved contacts selected' });
    })
  }

  const deleteContact = (request, response) => {                               // DELETE
    const id = parseInt(request.params.id2)
      pool.query('DELETE FROM employeescontacts WHERE id2 = $1', [id], (error, results) => {
      if (error) {        throw error      }
      response.status(200).send(`Contact deleted with ID: ${id}`)
    })
  }

  const updateContact = (request, response) => {                                //  PUT 
    const id = parseInt(request.params.id2)
    const { email,mobile,xstatus  } = request.body
    pool.query('UPDATE employeescontacts SET email=$1, mobile=$2, xstatus=$3 WHERE id2 = $4',
      [email,mobile,xstatus, id],
      (error, results) => {    if (error) {     throw error        }
        response.status(200).send(`Contact modified with ID: ${id}`)})
  }

const createContact = (request, response) => {                                //  POST
    const {id2,email,mobile,xstatus } = request.body  
    pool.query('INSERT INTO employeescontacts (id2,email,mobile,xstatus) VALUES ($1,$2,$3,$4)',
    [id2,email,mobile,xstatus ], 
     (error, employed) => { if (error) {        throw error      }
      response.status(201).send(`New contact of employee added: ${email+ " of "+mobile}`)})
  }

module.exports = {getContacts,getContact,createContact, updateContact, deleteContact}