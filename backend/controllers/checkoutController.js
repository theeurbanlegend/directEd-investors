const asyncHandler = require("express-async-handler");
const Stripe = require("stripe");
const { addInvestment } = require("./invControllers");
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

const createCheckoutSession = asyncHandler(async (req, res) => {
  const { pool, tokens, paymentMethod, userId } = req.body;
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
    metadata: {
      pool_id: pool._id,
      investor_id: userId,
    },
    mode: "payment",
    success_url: `${process.env.STRIPE_SUCCESS_URL}pool/${pool._id}/invest/success`,
    cancel_url: `${process.env.STRIPE_CANCEL_URL}pool/${pool._id}/invest/cancel`,
  });
  res.json({ id: session.id });
});

const handleCheckoutEvents = async (req, res) => {
  const sig = req.headers["stripe-signature"];
  let event;
  try {
    event = stripe.webhooks.constructEvent(
      req.body,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET
    );
  } catch (err) {
    console.log(`Webhook Error: ${err.message}`);
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }
  switch (event.type) {
    case "checkout.session.async_payment_failed":
      const checkoutSessionAsyncPaymentFailed = event.data.object;
      console.log(
        "checkoutSessionAsyncPaymentFailed",
        checkoutSessionAsyncPaymentFailed
      );
      // Then define and call a function to handle the event checkout.session.async_payment_failed
      break;
    case "checkout.session.async_payment_succeeded":
      const checkoutSessionAsyncPaymentSucceeded = event.data.object;
      console.log(
        "checkoutSessionAsyncPaymentSucceeded",
        checkoutSessionAsyncPaymentSucceeded
      );
      // Then define and call a function to handle the event checkout.session.async_payment_succeeded
      break;
    case "checkout.session.completed":
      const checkoutSessionCompleted = event.data.object;
      const {
        id,
        amount_total,
        created,
        customer_details: { email, name },
        payment_status,
        status,
        metadata: { pool_id, investor_id },
      } = checkoutSessionCompleted;

      if (status === "complete") {
          await addInvestment(pool_id, email, investor_id, amount_total, created)
      }
      break;
    case "checkout.session.expired":
      const checkoutSessionExpired = event.data.object;
      console.log("checkoutSessionExpired", checkoutSessionExpired);
      // Then define and call a function to handle the event checkout.session.expired
      break;
    // ... handle other event types
    default:
      console.log(`Unhandled event type ${event.type}`);
  }
  res.status(200).json({ received: true });
};
module.exports = { createCheckoutSession, handleCheckoutEvents };
