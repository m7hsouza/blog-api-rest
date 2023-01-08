const express = require('express');
const postsService = require('../service/postsService');

const router = express.Router();

router.get('/posts', async function(request, response) {
	const posts = await postsService.getPosts();
	response.json(posts);
});

router.post('/posts', async function(request, response) {
	const post = request.body;
	const newPost = await postsService.savePost(post);
	response.json(newPost);
});

module.exports = router;