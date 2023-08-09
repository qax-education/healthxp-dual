const express = require('express')

const Joi = require('joi')
const validator = require('express-joi-validation').createValidator({ passError: true })

const app = express()

app.use(express.json())

const db = require('./db')

app.get('/', function (req, res) {
    res.json({ message: 'Hello Api Helper' })
})

const studentSchema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    age: Joi.number().required(),
    weight: Joi.number().required(),
    feet_tall: Joi.number().required()
})

app.post('/students', validator.body(studentSchema), db.deleteAndCreateStudent)
app.delete('/students/:email', db.deleteStudentByEmail)

app.post('/enrolls', db.insertEnrollByEmail)

app.use((err, req, res, next) => {
    if (err && err.error && err.error.isJoi) {
        // we had a joi error, let's return a custom 400 json response
        res.status(400).json({
            type: err.type, // will be "query" here, but could be "headers", "body", or "params"
            message: err.error.toString()
        });
    } else {
        // pass on to another error handler
        next(err);
    }
});

app.listen(5000)