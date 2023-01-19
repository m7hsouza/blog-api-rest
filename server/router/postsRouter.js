const express = require('express');
const postsService = require('../service/postsService');

const router = express.Router();

router.get('/posts', async function(request, response) {
	const posts = await postsService.getPosts();
	response.json(posts);
});

router.post('/posts', async function(request, response) {
	try {
		const post = request.body;
		const newPost = await postsService.savePost(post);
		response.status(201).json(newPost);
	} catch (e) {
		response.status(409).send(e.message);
	}
});

router.put('/posts/:id', async function(request, response) {
	try {
		const post = request.body;
		await postsService.updatePost(request.params.id, post);
		response.status(204).end();
	} catch (e) {
		response.status(404).send(e.message);
	}
});

router.delete('/posts/:id', async function(request, response) {
	await postsService.deletePost(request.params.id);
	response.status(204).end();
});

module.exports = router;