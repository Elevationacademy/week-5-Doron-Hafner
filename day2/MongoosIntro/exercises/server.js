const express = require('express')
const bodyParser = require('body-parser')
const routes = require('./routes/routes')
const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use('/', routes)


const port = 3000 
app.listen(port, function () {
    console.log(`Server running on ${port}`)
})
