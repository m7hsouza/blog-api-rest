const pgp = require('pg-promise')();

const db = pgp({
	user: 'postgres',
	password: 'postgrespw',
	host: 'localhost',
	port: 55000,
	database: 'blog'
});

module.exports = db;