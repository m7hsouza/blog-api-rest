const database = require('../infra/database');

exports.getPosts = function () {
	return database.query('select * from blog.posts')
};

exports.savePost = function(post) {
	return database.one('insert into blog.posts (title, content) values ($1, $2) returning *', [post.title, post.content]);
};

exports.deletePost = function (id) {
	return database.none('delete from blog.posts where id = $1', [id]);
};