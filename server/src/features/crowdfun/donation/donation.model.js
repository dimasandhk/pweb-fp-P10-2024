const mongoose = require('mongoose');

const donationSchema = new mongoose.Schema({
  paymentMethod: {
    type: String,
    required: true,
  },
  bankName: {
    type: String,
  },
  amount: {
    type: Number,
    required: true,
  },
  proof: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Donation = mongoose.model('Donation', donationSchema);

module.exports = Donation;