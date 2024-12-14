const { Feedback } = require("./feedback.model");

const BookService = {
    async createFeedback(feedback) {
        try {
            const newFeedback = new Feedback(feedback);
            return await newFeedback.save();
        } catch (error) {
            throw new Error(error);
        }
    },
    async getFeedbacks() {
        try {
            return await Feedback.find();
        } catch (error) {
            throw new Error(error);
        }
    },
};

module.exports = BookService;
