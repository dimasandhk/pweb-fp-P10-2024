const Crowdfund = require('./crowdfund.model');

const getCrowdfunds = async (req, res) => {
  try {
    const crowdfunds = await Crowdfund.find();
    res.json(crowdfunds);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createCrowdfund = async (req, res) => {
  const { name, description, goal } = req.body;

  const newCrowdfund = new Crowdfund({
    name,
    description,
    goal,
  });

  try {
    const savedCrowdfund = await newCrowdfund.save();
    res.status(201).json(savedCrowdfund);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = {
  getCrowdfunds,
  createCrowdfund,
};