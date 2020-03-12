// TABLE # 2/3

const Pool = require('pg').Pool

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'presly',
  password: 'Monze2020',
  port: 5432})

const getEmployees = (request, response) => {                                 // GET ALL
pool.query('SELECT * FROM employees ORDER BY id1 ASC', (error, results) => {
      if (error) {  throw error      }
      response.status(200).json({
        status: 'success', 
        data: results.rows,
        message: 'Retrieved ALL employees' });
    })
  }

const getEmployee = (request, response) => {                                  // GET ONE
  const id = parseInt(request.params.id1)
  pool.query('SELECT * FROM employees WHERE id1 = $1', [id], (error, results) => {
      if (error) {        throw error      }
      response.status(200).json({
        status: 'success', 
        data: results.rows,
        message: 'Retrieved employee selected' });
    })
  }

  const deleteEmployee = (request, response) => {                               // DELETE
    const id = parseInt(request.params.id1)
      pool.query('DELETE FROM employees WHERE id1 = $1', [id], (error, results) => {
      if (error) {        throw error      }
      response.status(200).send(`Employee deleted with ID: ${id}`)
    })
  }

  const updateEmployee = (request, response) => {                                //  PUT 
    const id = parseInt(request.params.id1)
    const { name,dept,post,salary  } = request.body
    pool.query('UPDATE employees SET name = $1, post=$2, dept=$3, salary=$4 WHERE id1 = $5',
      [name,dept,post,salary, id],
      (error, results) => {    if (error) {     throw error        }
        response.status(200).send(`Employee modified with ID: ${id}`)})
  }

const createEmployee = (request, response) => {                                  //  POST
    const {name,dept,post,salary,status } = request.body  
    pool.query('INSERT INTO employees (name,dept,post,salary,status ) VALUES ($1, $2,$3,$4,$5)',
    [name,dept,post,salary,status ], 
     (error, employed) => { if (error) {        throw error      }
      response.status(201).send(`Name of employee added: ${name+ " of "+dept}`)})
  }

module.exports = {getEmployees,getEmployee,createEmployee, updateEmployee, deleteEmployee,}