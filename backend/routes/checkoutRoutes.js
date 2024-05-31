const router = require("express").Router();
const express = require("express");
const {
  createCheckoutSession,
  handleCheckoutEvents,
} = require("../controllers/checkoutController");
router.post(
  "/webhook",
  express.raw({ type: "application/json" }),
  handleCheckoutEvents
);
router.post("/pool/:poolId", createCheckoutSession);
const checkoutRouter = router;
module.exports = checkoutRouter;
