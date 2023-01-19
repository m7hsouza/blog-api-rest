const database = require('../infra/database');

exports.getPosts = function () {
	return database.query('select * from blog.posts')
};

exports.getPost = function (id) {
	return database.oneOrNone('select * from blog.posts where id = $1', [id]);
};

	exports.getPostByTitle = function (title) {
		return database.oneOrNone('select * from blog.posts where title = $1', [title]);
	};

exports.savePost = function(post) {
	return database.one('insert into blog.posts (title, content) values ($1, $2) returning *', [post.title, post.content]);
};

exports.deletePost = function (id) {
	return database.none('delete from blog.posts where id = $1', [id]);
};

exports.updatePost = function (id, post) {
	return database.none('update blog.posts set title = $1, content = $2 where id = $3', [post.title, post.content, id]);
};