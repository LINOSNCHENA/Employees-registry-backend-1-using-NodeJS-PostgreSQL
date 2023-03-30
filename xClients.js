// STUDENTS TABLE # 2/3

const Pool = require('pg').Pool
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'presly',
  password: 'Thresa@2022',
  port: 5432,
})

const createClients = (request, response) => {                                //  CREATE
  const { id3, mother, father } = request.body
  pool.query('INSERT INTO TCLIENTS (id3,mother, father) VALUES ($1,$2,$3)',
    [id3, mother, father],
    (error, employed) => {
      if (error) { throw error }
      response.status(201).send(`New next of kin employee of loan added: ${mother + " and " + father}`)
    })
}

const getClientss = (request, response) => {                                 // GET ALL
  pool.query('SELECT * FROM TCLIENTS ORDER BY id3 ASC', (error, results) => {
    if (error) { throw error }
    response.status(200).json({
      status: 'success',
      data: results.rows,
      message: 'Retrieved ALL next of kins comtacts'
    });
  })
}

const getClients = (request, response) => {                                  // GET ONE
  const id = parseInt(request.params.id3)
  pool.query('SELECT * FROM TCLIENTS WHERE id3 = $1', [id], (error, results) => {
    if (error) { throw error }
    response.status(200).json({
      status: 'success',
      data: results.rows,
      message: 'Retrieved employees of next of kins selected'
    });
  })
}

const updateClients = (request, response) => {                                //  UPDATE 
  const id = parseInt(request.params.id3)
  const { mother, father } = request.body
  pool.query('UPDATE TCLIENTS SET mother=$1, father=$2 WHERE id3 = $3',
    [mother, father, id],
    (error, results) => {
      if (error) { throw error }
      response.status(200).send(`Employee modified with ID: ${id}`)
    })
}

const deleteClients = (request, response) => {                               // DELETE
  const id = parseInt(request.params.id3)
  pool.query('DELETE FROM TCLIENTS WHERE id3 = $1', [id], (error, results) => {
    if (error) { throw error }
    response.status(200).send(`Employee deleted with ID: ${id}`)
  })
}

module.exports = { getClients, getClientss, createClients, updateClients, deleteClients }
