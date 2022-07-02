const express = require('express');
const { MongoClient } = require('mongodb')

const app = express()

app.use(express.json())

const port = 3000

app.get('/', (req, res) => {

    let message = "<h1>Welcome to Node.js MongoDB API<h1>"
    res.send(message)
})

app.listen(port, () => {
    console.log(`Your app is working on ${port}!`)
})