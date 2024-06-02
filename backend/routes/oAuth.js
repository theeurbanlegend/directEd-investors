const express = require('express')
const router = require('express').Router()
const dotenv = require('dotenv')
dotenv.config()
const {OAuth2Client} = require('google-auth-library')

async function getUserData(access_token){
   
    const response = await fetch(`https://www.googleapis.com/oauth2/v3/userinfo?access_token${access_token}`)
    const data = await response.json()
    console.log('data:', data)

}

router.get('/', async function (req, res, next) {
   const code = req.query.code;
   try {
       const redirectUrl = 'http://127.0.0.1:8080/oauth';
       const oAuth2Client = new OAuth2Client(
           process.env.CLIENT_ID,
           process.env.CLIENT_SECRET,
           redirectUrl
       );

       const { tokens } = await oAuth2Client.getToken(code);
       oAuth2Client.setCredentials(tokens);
       console.log('Tokens Acquired');
       console.log('Credentials:', oAuth2Client.credentials);

       await getUserData(tokens.access_token);

       const frontendRedirectUrl = `http://localhost:5173/dashboard?success=true`;
       res.redirect(frontendRedirectUrl);
   } catch (err) {
       console.error('Error during authentication:', err);
       res.status(500).send('Authentication failed');
   }
});

// router.get('/oauth', async function(req, res, next){
//    const code = req.query.code
//    try{
//     const redirectUrl = 'http://127.0.0.1:8080/oauth';
//     const oAouth2Client = new OAuth2Client (
//     process.env.CLIENT_ID,
//     process.env.CLIENT_SECRET,
//     redirectUrl 
// )
// const { tokens } = await oAouth2Client.getToken(code)
// await oAouth2Client.setCredentials(res.tokens)   
// console.log('Tokens Acquired')
// const user = oAouth2Client.credentials
// console.log('Credentials:', user)
// await getUserData(user.access_token)
// res.redirect('/dashboard')
// }
//    catch(err){
// console.log("Error signing in with google")
//    }
// })

module.exports = router