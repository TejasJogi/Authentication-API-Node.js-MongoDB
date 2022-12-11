const express = require('express')
const { MongoClient } = require('mongodb')
require('dotenv').config()

const app = express()

app.use(express.json())

const port = 3000

const uri = process.env.URI
const dbo = new MongoClient(uri, {useNewUrlParser: true})
const db = dbo.db("technokart")
const col = db.collection('employees')


app.get('/api/', (req, res) => {

    let message = "<h1>Welcome to Node.js MongoDB API<h1>"
    res.send(message)
})

app.get('/api/empDetails', (req, res) => {

    MongoClient.connect(uri, async function(err, db) {
        if (err) throw err;

        let emp = await col.find({}).toArray()

        res.send(emp)
        db.close();
    });
})

app.get('/api/empDetail', (req, res) =>{

    MongoClient.connect(uri, async function(err, db) {
        if (err) throw err;

        empl = req.body
        console.log(empl33)
        
        let emple = await col.findOne({"EmpID": empl.EmpID})

        console.log(emple)
        res.send(emple)
        db.close();
    })
})

app.post('/api/empRegister', (req, res) => {

    MongoClient.connect(uri, async function(err,db) {
        if (err) throw err;

        empReg = req.body

        let reg = await col.insertOne(empReg)

        res.send(reg)
        db.close();
    })
})

app.post('/api/empUpdate', (req, res) => {

    MongoClient.connect(uri, async function(err,db) {
        if (err) throw err;

        empUp = req.body
        squery = {"EmpID": empUp.EmpID}
        upd = {$set: empUp}

        let up = await col.updateOne(squery, upd)

        res.send(up)
        db.close();
    })
})

app.post('/api/empDelete', (req, res) => {

    MongoClient.connect(uri, async function (err,db) {
        if (err) throw err;
        empDlt = req.body

        let dlt = await col.deleteOne(empDlt)

        res.send(dlt)
        db.close();
    })
})

app.listen(port, () => {
    console.log(`Your app is working on ${port}!`)
})