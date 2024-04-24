const express=require('express')
const connectDB = require('./db/db')
const dotenv=require('dotenv').config()
const app=express()

connectDB()
app.listen(process.env.PORT, ()=>{
    console.log(`Server is running on port ${process.env.PORT}`)
})