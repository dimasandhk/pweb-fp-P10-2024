const mongoose = require('mongoose');

const crowdfundSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  goal: {
    type: Number,
    required: true,
  },
  raised: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Crowdfund = mongoose.model('Crowdfund', crowdfundSchema);

module.exports = Crowdfund;