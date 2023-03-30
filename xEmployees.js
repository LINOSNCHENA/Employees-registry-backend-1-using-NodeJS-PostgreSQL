// COURSES TABLE #1/3

const Pool = require('pg').Pool

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'presly',
  password: 'Thresa@2022',
  port: 5432,
})


const createEmployee = (request, response) => {                                //  CRUD1
  const { id2, email, mobile, xstatus } = request.body
  pool.query('INSERT INTO TEMPLOYEES (id2,email,mobile,xstatus) VALUES ($1,$2,$3,$4)',
    [id2, email, mobile, xstatus],
    (error, employed) => {
      if (error) { throw error }
      response.status(201).send(`New employee of loan added: ${email + " of " + mobile}`)
    })
}

const getEmployees = (request, response) => {                                 // GET 2
  pool.query('SELECT * FROM TEMPLOYEES ORDER BY id2 ASC', (error, results) => {
    if (error) { throw error }
    response.status(200).json({
      status: 'success',
      data: results.rows,
      message: 'Retrieved ALL comtacts'
    });
  })
}

const getEmployee = (request, response) => {                                  // GET 2
  const id = parseInt(request.params.id2)
  pool.query('SELECT * FROM TEMPLOYEES WHERE id2 = $1', [id], (error, results) => {
    if (error) { throw error }
    response.status(200).json({
      status: 'success',
      data: results.rows,
      message: 'Retrieved employees selected'
    });
  })
}


const updateEmployee = (request, response) => {                                //  UPDATE 
  const id = parseInt(request.params.id2)
  const { email, mobile, xstatus } = request.body
  pool.query('UPDATE TEMPLOYEES SET email=$1, mobile=$2, xstatus=$3 WHERE id2 = $4',
    [email, mobile, xstatus, id],
    (error, results) => {
      if (error) { throw error }
      response.status(200).send(`Employee modified with ID: ${id}`)
    })
}



const deleteEmployee = (request, response) => {                               // DELETE
  const id = parseInt(request.params.id2)
  pool.query('DELETE FROM TEMPLOYEES WHERE id2 = $1', [id], (error, results) => {
    if (error) { throw error }
    response.status(200).send(`Employee deleted with ID: ${id}`)
  })
}

// Crude Modules
module.exports = { getEmployees, getEmployee, createEmployee, updateEmployee, deleteEmployee }
