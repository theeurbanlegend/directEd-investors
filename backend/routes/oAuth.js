const express = require('express')
const router = require('express').Router()
const dotenv = require('dotenv')
dotenv.config()
const {OAuth2Client} = require('google-auth-library')
const Investor = require("../models/investorSchema");



async function getUserData(access_token) {
    try {
        console.log('Access Token:', access_token); // Log the access token
        const response = await fetch(`https://www.googleapis.com/oauth2/v3/userinfo?access_token=${access_token}`);
        console.log('Response Status:', response.status); // Log the response status
        const responseText = await response.text();
        console.log('Response Text:', responseText); // Log the response text
        if (!response.ok) throw new Error(`Failed to fetch user data: ${responseText}`);
        const data = JSON.parse(responseText);
        console.log('data:', data);
        return data;
    } catch (err) {
        console.error('Error fetching user data:', err);
    }
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

     const userData =  await getUserData(tokens.access_token);
     console.log('User Data:', userData);

     let investor = await Investor.findOne({ investor_email: userData.email });
     if (!investor) {
         // Create a new investor
         investor = new Investor({
             investor_name: userData.given_name,
             investor_email: userData.email,
             profile: [{ url: userData.picture }],
             bio: '',  // Set a default or empty bio
             password: '',  // Not used in OAuth, can be set to null or empty
             pools_invested: [],
             investments: []
         });

         await investor.save()
             .then(() => console.log('New investor created:', investor))
             .catch((err) => {
                 console.error('Error saving new investor:', err);
                 throw err;
             });
     } else {
         console.log('Investor already exists:', investor);
     }

    //    const frontendRedirectUrl = `http://localhost:5173/dashboard?success=true`;
    const frontendRedirectUrl = `http://localhost:5173/dashboard?name=${encodeURIComponent(userData.given_name)}&email=${encodeURIComponent(userData.email)}&picture=${encodeURIComponent(userData.picture)}`;
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