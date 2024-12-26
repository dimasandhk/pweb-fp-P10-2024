const express = require('express');
const router = express.Router();
const Donation = require('./donation.model');

router.post('/donations', async (req, res) => {
  try {
    const { paymentMethod, bankName, amount, proof } = req.body;
    const newDonation = new Donation({
      paymentMethod,
      bankName,
      amount,
      proof,
    });
    const savedDonation = await newDonation.save();
    res.status(201).json(savedDonation);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;