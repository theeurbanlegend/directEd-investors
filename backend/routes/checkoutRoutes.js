const router = require('express').Router(); 
const {createCheckoutSession} = require('../controllers/checkoutController');
router.route('/:poolId').post(createCheckoutSession);
// const stripeWebhook = require('stripe-webhook-middleware')({
//     stripeApiKey: process.env.STRIPE_SECRET_KEY,
//     respond: true
// });
// router.post('/webhook', stripeWebhook, (req, res) => {
//     res.sendStatus(200);
// });
const checkoutRouter=router
module.exports = checkoutRouter