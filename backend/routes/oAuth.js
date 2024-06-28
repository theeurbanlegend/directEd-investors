const express = require('express')
const router = require('express').Router()
const dotenv = require('dotenv')
dotenv.config()
const {OAuth2Client} = require('google-auth-library')
const Investor = require("../models/investorSchema");
const Investment = require("../models/investmentSchema");
const jwtSign = require("../auth/jwtSign");



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
        const redirectUrl = ` https://directed-investors.onrender.com/oauth`;
        const oAuth2Client = new OAuth2Client(
            process.env.CLIENT_ID,
            process.env.CLIENT_SECRET,
            redirectUrl
        );

        const { tokens } = await oAuth2Client.getToken(code);
        oAuth2Client.setCredentials(tokens);
        console.log('Tokens Acquired');
        console.log('Credentials:', oAuth2Client.credentials);

        const userData = await getUserData(tokens.access_token);
        console.log('User Data:', userData);

        let investor = await Investor.findOne({ investor_email: userData.email })
            .populate("investments")
            .populate("pools_invested.pool_id")
            .populate("pools_invested.students_selected");

        if (!investor) {
            // Create a new investor
            investor = new Investor({
                investor_name: userData.given_name,
                investor_email: userData.email,
                profile: [{ url: userData.picture }],
                bio: '',
                password: '',
                pools_invested: [],
                investments: [],
                role:'investor',
                google_access_token: tokens.access_token,
                google_refresh_token: tokens.refresh_token
            });

            await investor.save()
                .then((newInvestor) => {
                    console.log('New investor created:', newInvestor);
                    console.log('Google access token saved:', tokens.access_token);
                })
                .catch((err) => {
                    console.error('Error saving new investor:', err);
                    throw err;
                });
        } else {
            console.log('Investor already exists:', investor);
            investor.google_access_token = tokens.access_token;
            investor.google_refresh_token = tokens.refresh_token;
            await investor.save()
                .then((updatedInvestor) => {
                    console.log('Investor access token updated:', updatedInvestor);
                })
                .catch((err) => {
                    console.error('Error updating investor:', err);
                    throw err;
                });
        }

        // Create your own JWT token to send to the frontend
        const accessToken = jwtSign(
              investor._id,
              investor.investor_name,
              investor.investor_email,
              investor.profile,
              investor.role
        );
        console.log("JWT:", accessToken)

        const frontendRedirectUrl = `https://directed-investors-platform.onrender.com/dashboard?name=${encodeURIComponent(userData.given_name)}&email=${encodeURIComponent(userData.email)}&picture=${encodeURIComponent(userData.picture)}&token=${encodeURIComponent(accessToken)}`;
        res.redirect(frontendRedirectUrl);
    } catch (err) {
        console.error('Error during authentication:', err);
        res.status(500).send('Authentication failed');
    }
});

module.exports = router
