const express = require('express')
const router = require('express').Router()
const dotenv = require('dotenv')
dotenv.config()
const {OAuth2Client} = require('google-auth-library')

router.post('/', async function(req, res, next){
    res.header('Access-Control-Allow-Origin', 'https://directed-investors-platform.onrender.com')
    res.header('Referrer-Policy','no-referrer-when-downgrade')

   const redirectUrl = 'http://127.0.0.1:8080/oauth';

   const oAouth2Client = new OAuth2Client (
    process.env.CLIENT_ID,
    process.env.CLIENT_SECRET,
    redirectUrl
)

const authorizeUrl = oAouth2Client.generateAuthUrl({
access_type:'offline',
scope:'https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/userinfo.email openid',
prompt:'consent'
})
res.json({url:authorizeUrl})

})

module.exports = router