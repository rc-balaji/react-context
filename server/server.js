const db = require('mongoose')
const express = require('express')
const cors = require('cors')
const router = require('./router/router')


const app = express()

app.use(cors())
app.use(express.json())
app.use(router)


db.connect("mongodb://127.0.0.1:27017/cart").then(()=>{
    console.log("Mongo Connencted")
}).catch((err)=>console.error(err))
app.listen(3000,()=>{
    console.log("Server is running on port 3000")
})