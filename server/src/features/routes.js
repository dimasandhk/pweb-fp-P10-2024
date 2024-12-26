const express = require("express");
const router = express.Router();

const feedbackRoute = require("./feedback/feedback.route");
const authRoute = require("./auth/auth.route");
const donationRoute = require("./crowdfun/donation/donation.routes");

router.use("/", feedbackRoute);
router.use("/", authRoute);
router.use("/", donationRoute);

module.exports = router;
