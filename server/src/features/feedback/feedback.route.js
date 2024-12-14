const express = require("express");
const router = express.Router();
const FeedbackService = require("./feedback.service");

router.post("/feedback", async (req, res) => {
    try {
        const feedback = req.body;
        if (feedback.is_anonymous) {
            feedback.name = "Anonymous";
            feedback.email = "anonymous@gmail.com";
        }
        const newFeedback = await FeedbackService.createFeedback(feedback);
        res.status(201).json({
            status: "success",
            message: "Feedback created successfully",
            data: newFeedback,
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.get("/feedbacks", async (req, res) => {
    try {
        const feedbacks = await FeedbackService.getFeedbacks();
        res.status(200).json({
            status: "success",
            message: "Feedbacks retrieved successfully",
            data: feedbacks,
        });
        // res.json(feedbacks);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
