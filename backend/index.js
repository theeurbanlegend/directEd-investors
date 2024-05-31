const express=require('express')
const connectDB = require('./db/db')
const dotenv=require('dotenv').config()
const app=express()
// const passport = require('passport')
// const passportSetup = require('./passport')
const corsOptions=require('cors')
const invRouter = require('./routes/invRoutes')
const oAuthRouter = require('./routes/oAuth')
const requestRouter = require('./routes/request')
// const session = require('express-session')
// const GoogleAuth = require('./routes/auth')
require('./models/investmentSchema')
const studentRouter = require('./routes/studentRoutes')
const poolRouter = require('./routes/poolRoutes')
const attachmentRouter = require('./routes/attachmentRoutes')
const checkoutRouter = require('./routes/checkoutRoutes')
app.use(express.json())
app.use(corsOptions())
app.use('/oauth', oAuthRouter)
app.use('/request', requestRouter)
// app.use(session({
//     secret: process.env.ACCESS_SECRET, 
//     resave: false,
//     saveUninitialized: true,
//     cookie: { secure: false }
//   }));
// app.use(passport.initialize())
// app.use(passport.session())
// app.use('/api/auth', GoogleAuth)

app.use('/api/checkout', checkoutRouter)
app.use('/api/inv', invRouter)
app.use('/api/students', studentRouter)
app.use('/api/pools', poolRouter)
app.use('/api/attachments', attachmentRouter)
connectDB()
app.listen(process.env.PORT, ()=>{
    console.log(`Server is running on port ${process.env.PORT}`)
})