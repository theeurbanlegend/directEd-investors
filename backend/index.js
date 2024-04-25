const express=require('express')
const connectDB = require('./db/db')
const dotenv=require('dotenv').config()
const app=express()
const corsOptions=require('cors')
const invRouter = require('./routes/invRoutes')

app.use(corsOptions())
app.use('/api/inv/', invRouter)
connectDB()
app.listen(process.env.PORT, ()=>{
    console.log(`Server is running on port ${process.env.PORT}`)
})