const { Pool } = require('pg')

const pool = new Pool({
    host: 'silly.db.elephantsql.com',
    user: 'hsywlyyy',
    password: 'ClEyatVCG8xlZZJ2lMtU6S4dxhzOJaP4',
    database: 'hsywlyyy',
    port: 5432
})

const deleteAndCreateStudent = (req, res) => {

    const student = req.body

    const query = `
    WITH add AS (
      INSERT INTO students (name, email, age, weight, feet_tall)
      VALUES ($1, $2, $3, $4, $5)
    )
    DELETE FROM students WHERE email = $2;
  `

    const values = [
        student.name, student.email, student.age, student.weight, student.feet_tall
    ]

    pool.query(query, values, function (error, result) {
        if (error) {
            return res.status(500).json(error)
        }
        res.status(201).json(result)
    })
}

const deleteStudentByEmail = (req, res)=> {

    const studentEmail = req.params.email

    const query = 'DELETE FROM students WHERE email = $1;'

    pool.query(query, [studentEmail], function (error, result) {
      if (error) {
        return res.status(500).json(error)
      }
      res.status(204).end()
    })

}

const selectStudent = (req, res) => {

    const studentEmail = req.params.email

    const query = 'SELECT id FROM students WHERE email = $1;'

    pool.query(query, [studentEmail], function (error, result) {
      if (error) {
        return res.status(500).json(error)
      }
      res.status(200).json(result.rows[0])
    })
}

const insertEnroll = (req, res) => {
  const enroll = req.body

  const query = `
    INSERT INTO enrollments (enrollment_code, student_id, plan_id, credit_card, status, price)
    VALUES ($1, $2, $3, $4, $5, $6)
  `

  const values = [
    enroll.enrollment_code, enroll.student_id, enroll.plan_id, enroll.credit_card, enroll.status, enroll.price
  ]

  pool.query(query, values, function (error, result) {
      if (error) {
          return res.status(500).json(error)
      }
      res.status(201).json(result)
  })
}

module.exports = {
    deleteAndCreateStudent,
    deleteStudentByEmail,
    selectStudent,
    insertEnroll
}