const express = require('express');

const app = express();
app.use(express.json());
app.use('/', require('./router/postsRouter'));
app.use((error, _, response, __) => {
	if (error.message == 'Post already exists') {
		return response.status(409).send(error.message);
	}
	if (error.message === 'Post not found') {
		response.status(404).send(error.message);
	}
	return response.status(500).send(error.message);
})
app.listen(3000);