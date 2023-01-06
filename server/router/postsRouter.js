const express = require('express');
const postsService = require('../service/postsService');

const router = express.Router();

router.get('/posts', async function(request, response) {
	const posts = await postsService.getPosts();
	response.json(posts);
});

module.exports = router;