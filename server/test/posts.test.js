const axios = require('axios');
const crypto = require('crypto');
const postsService = require('../service/postsService');

const generate = function () {
	return crypto.randomBytes(20).toString('hex');
}

const request = function (method, url, data) {
	return axios({ url, method, data });
}

test('Should get posts', async function () {
	// given - dado que
	const post1 = await postsService.savePost({ title: generate(), content: generate() });
	const post2 = await postsService.savePost({ title: generate(), content: generate() });
	const post3 = await postsService.savePost({ title: generate(), content: generate() });

	// when - quando acontecer
	const response = await request('get', 'http://localhost:3000/posts');
	const posts = response.data;

	// then - então
	expect(posts).toHaveLength(3);
	await postsService.deletePost(post1.id);
	await postsService.deletePost(post2.id);
	await postsService.deletePost(post3.id);
});