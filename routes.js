const Pool = require('pg').Pool

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'presly',
  password: 'Monze2019@',
  port: 5432})

const getEmployees = (request, response) => {                                 // GET ALL
    pool.query('SELECT * FROM bank5 ORDER BY id ASC', (error, results) => {
      if (error) {  throw error      }
      response.status(200).json(results.rows)
    })
  }

const getEmployee = (request, response) => {                                  // GET ONE
    const id = parseInt(request.params.id)
      pool.query('SELECT * FROM bank5 WHERE id = $1', [id], (error, results) => {
      if (error) {        throw error      }
      response.status(200).json(results.rows)
    })
  }

  const deleteEmployee = (request, response) => {                              // DELETE
    const id = parseInt(request.params.id)
      pool.query('DELETE FROM bank5 WHERE id = $1', [id], (error, results) => {
      if (error) {        throw error      }
      response.status(200).send(`Employee deleted with ID: ${id}`)
    })
  }

  const updateEmployee = (request, response) => {                              //  PUT 
    const id = parseInt(request.params.id)
    const { name,dept,post,salary,status  } = request.body
    pool.query('UPDATE bank5 SET name = $1, post=$2, dept=$3, salary=$4,status=$5 WHERE id = $6',
      [name,dept,post,salary,status, id],
      (error, results) => {    if (error) {     throw error        }
        response.status(200).send(`Employee modified with ID: ${id}`)
      })
  }

const createEmployee = (request, response) => {                                  //  POST
    const {name,dept,post,salary } = request.body  
    pool.query('INSERT INTO bank5 (name,dept,post,salary) VALUES ($1, $2,$3,$4)',
    [name,dept,post,salary], 
     (error, employed) => { if (error) {        throw error      }
      response.status(201).send(`Number of employees added: ${employed.rowCount}`)
    })
  }

module.exports = {getEmployees,getEmployee,createEmployee, updateEmployee, deleteEmployee,}