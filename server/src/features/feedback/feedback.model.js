const mongoose = require("mongoose");
const { Schema } = mongoose;

const feedbackSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        is_anonymous: {
            type: Boolean,
            default: false,
        },
        email: {
            type: String,
            required: true,
        },
        message: {
            type: String,
            required: true,
        },
    },
    { timestamps: true }
);

const Feedback = mongoose.model("Feedback", feedbackSchema);
module.exports = { Feedback };
