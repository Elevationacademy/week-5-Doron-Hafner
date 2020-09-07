const express = require('express')
const path = require('path')
const app = express()

const randomWord = require('./server/randomWord')
const sentiment = require('./server/sentiment')
const synonyms = require('./server/synonyms')
app.use(express.static(path.join(__dirname, 'dist')))
app.use(express.static(path.join(__dirname, 'node_modules')))

app.use('/', randomWord)
app.use('/', sentiment)
app.use('/', synonyms)


app.listen(3000, function () {
    console.log("Server running on 3000")
})
