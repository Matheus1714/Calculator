const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const HistoryOperation = require('./database')
const CalculateExpression = require('./calculateExpression')
const cors = require('cors')

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

app.use(cors())

app.post('/history', (req, res) => {
    let operations = new HistoryOperation()
    operations.getHistoryOperation().then((data) => {
        res.status(202).end(JSON.stringify(data))
    })
})
app.post('/add', (req, res) => {
    let expression = req.body.expression
    let operations = new HistoryOperation()
    operations.addExperssionOnDatabase(expression).then(() => {
        res.status(202).end(JSON.stringify({
            'message':'add new expression'
        }))
    })
})
app.post('/result', (req, res) => {
    let expression = req.body.expression
    let calculateExpression = new CalculateExpression(expression)
    result = calculateExpression.resultExpression()
    
    res.status(202).end(JSON.stringify({
        result
    }))
})

module.exports = app