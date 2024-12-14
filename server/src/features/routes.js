const express = require("express");
const router = express.Router();

const feedbackRoute = require("./feedback/feedback.route");

router.use("/", feedbackRoute);

module.exports = router;
