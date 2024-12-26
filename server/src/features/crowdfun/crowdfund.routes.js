const express = require('express');
const { getCrowdfunds, createCrowdfund } = require('./crowdfund.controller');
const { createComment, getComments } = require('./comment.controller');

const router = express.Router();

router.get('/', getCrowdfunds);
router.post('/', createCrowdfund);
router.post('/:postId/comments', createComment);
router.get('/:postId/comments', getComments);

module.exports = router;