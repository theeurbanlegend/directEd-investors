const express=require('express')
const connectDB = require('./db/db')
const dotenv=require('dotenv').config()
const app=express()
const corsOptions=require('cors')
const invRouter = require('./routes/invRoutes')
const oAuthRouter = require('./routes/oAuth')
const requestRouter = require('./routes/request')
require('./models/investmentSchema')
const studentRouter = require('./routes/studentRoutes')
const poolRouter = require('./routes/poolRoutes')
const attachmentRouter = require('./routes/attachmentRoutes')
const checkoutRouter = require('./routes/checkoutRoutes')
//use Jon parser for all non-webhook routes
app.use(
    (req, res, next) => {
        if(req.originalUrl === '/api/checkout/webhook'){
            next()
        }else{
            express.json()(req, res, next)
        }
    }
)
app.use(corsOptions())
app.use('/oauth', oAuthRouter)
app.use('/request', requestRouter)
app.use('/api/checkout', checkoutRouter)
app.use('/api/inv', invRouter)
app.use('/api/students', studentRouter)
app.use('/api/pools', poolRouter)
app.use('/api/attachments', attachmentRouter)
connectDB()
app.listen(process.env.PORT, ()=>{
    console.log(`Server is running on port ${process.env.PORT}`)
})