const express = require('express');
const postsService = require('../service/postsService');

const router = express.Router();

router.get('/posts', async function(request, response, next) {
	const posts = await postsService.getPosts();
	response.json(posts);
});

router.post('/posts', async function(request, response, next) {
	try {
		const post = request.body;
		const newPost = await postsService.savePost(post);
		response.status(201).json(newPost);
	} catch (error) {
		next(error);
	}
});

router.put('/posts/:id', async function(request, response, next) {
	try {
		const post = request.body;
		await postsService.updatePost(request.params.id, post);
		response.status(204).end();
	} catch (error) {
		next(error);
	}
});

router.delete('/posts/:id', async function(request, response, next) {
	try {
		await postsService.deletePost(request.params.id);
		response.status(204).end();
	} catch (error) {
		next(error);
	}
});

module.exports = router;