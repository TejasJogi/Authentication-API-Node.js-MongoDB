const express = require('express');
const { MongoClient } = require('mongodb')
require('dotenv').config()

const app = express()

app.use(express.json())

const port = 3000

const uri = process.env.URI
const client = new MongoClient(uri)

app.get('/', (req, res) => {

    let message = "<h1>Welcome to Node.js MongoDB API<h1>"
    res.send(message)
})

app.get('/signup', (req, res) => {

    
    res.send()
})

app.listen(port, () => {
    console.log(`Your app is working on ${port}!`)
})