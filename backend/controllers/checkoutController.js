const asyncHandler = require("express-async-handler");
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const createCheckoutSession = asyncHandler(async (req, res) => {
  const { pool, tokens, paymentMethod } = req.body;
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items: [
      {
        price_data: {
          currency: "usd",
          product_data: {
            name: `Pool ${pool.pool_name} investment`,
          },
          unit_amount: tokens,
        },
        quantity: 1,
      },
    ],
    mode: "payment",
    success_url: `${process.env.STRIPE_SUCCESS_URL}pool/${pool._id}/invest/success`,
    cancel_url: `${process.env.STRIPE_CANCEL_URL}pool/${pool._id}/invest/cancel`,
  });
  res.json({ id: session.id });
});
module.exports = { createCheckoutSession };
