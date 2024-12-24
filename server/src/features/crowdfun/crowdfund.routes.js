const express = require('express');
const { getCrowdfunds, createCrowdfund } = require('./crowdfund.controller');

const router = express.Router();

router.get('/', getCrowdfunds);
router.post('/', createCrowdfund);

module.exports = router;