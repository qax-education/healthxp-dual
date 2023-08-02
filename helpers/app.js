const express = require('express')
const app = express()

app.use(express.json())

const db = require('./db')

app.get('/', function (req, res) {
    res.json({ message: 'Hello Api Helper' })
})

app.post('/students', db.deleteAndCreateStudent)
app.delete('/students/:email', db.deleteStudentByEmail)
app.get('/students/:email', db.selectStudent)

// #DualExperienceDesafio2
app.post('/enrolls', db.insertEnroll)

app.listen(5000)