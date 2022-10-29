const express = require('express')
const { MongoClient } = require('mongodb')
require('dotenv').config()

const app = express()

app.use(express.json())

const port = 3000

const uri = process.env.URI
const dbo = new MongoClient(uri, {useNewUrlParser: true});
const db = dbo.db("technokart")
const col = db.collection('employees')


app.get('/', (req, res) => {

    let message = "<h1>Welcome to Node.js MongoDB API<h1>"
    res.send(message)
})

app.get('/empDetails', (req, res) => {

    MongoClient.connect(uri, async function(err, db) {
        if (err) throw err;

        let emp = await col.find({}).toArray()

        res.send(emp)
        db.close();
    });
})

app.post('/empRegister', (req, res) => {

    MongoClient.connect(uri, async function(err,db) {
        if (err) throw err;

        empReg = req.body
        console.log(empReg)

        let reg = await col.insertOne(empReg)

        res.send(reg)
        db.close();
    })
})

app.listen(port, () => {
    console.log(`Your app is working on ${port}!`)
})