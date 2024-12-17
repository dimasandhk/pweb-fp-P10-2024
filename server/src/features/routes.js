const express = require("express");
const router = express.Router();

const feedbackRoute = require("./feedback/feedback.route");
const authRoute = require("./auth/auth.route");

router.use("/", feedbackRoute);
router.use("/", authRoute);

module.exports = router;
