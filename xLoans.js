// TEACHERS TABLE # 3/3

const Pool = require('pg').Pool

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'presly',
  password: 'Thresa@2022',
  port: 5432,
})

const createLoan = (request, response) => {                                  //  CREATE
  const { name, mobile, office, stars } = request.body
  pool.query('INSERT INTO TLOANS (name,mobile,office,stars ) VALUES ($1,$2,$3,$4)',
    [name, mobile, office, stars],
    (error, employed) => {
      if (error) { throw error }
      response.status(201).send(`Name/mobile of Xworker added: ${name + " of " + mobile}`)
    })
}

const getLoans = (request, response) => {                                 // GET ALL
  pool.query('SELECT * FROM TLOANS ORDER BY id1 ASC', (error, results) => {
    if (error) { throw error }
    response.status(200).json({
      status: 'success',
      data: results.rows,
      message: 'Retrieved ALL TLOANS'
    });
  })
}

const getLoan = (request, response) => {                                  // GET ONE
  const id = parseInt(request.params.id1)
  pool.query('SELECT * FROM TLOANS WHERE id1 = $1', [id], (error, results) => {
    if (error) { throw error }
    response.status(200).json({
      status: 'success',
      data: results.rows,
      message: 'Retrieved loan selected'
    });
  })
}


const updateLoan = (request, response) => {                                //  PUT 
  const id = parseInt(request.params.id1)
  const { name, dept, salary } = request.body
  pool.query('UPDATE TLOANS SET name = $1, mobile=$2, office=$3, stars=$4 WHERE id1 = $5',
    [name, mobile, office, star, id],
    (error, results) => {
      if (error) { throw error }
      response.status(200).send(`Loan modified with ID: ${id}`)
    })
}


const deleteLoan = (request, response) => {                               // DELETE
  const id = parseInt(request.params.id1)
  pool.query('DELETE FROM TLOANS WHERE id1 = $1', [id], (error, results) => {
    if (error) { throw error }
    response.status(200).send(`Loan deleted with ID: ${id}`)
  })
}

// CRUD
module.exports = { getLoans, getLoan, createLoan, updateLoan, deleteLoan, }
