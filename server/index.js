const express = require('express');

const app = express();
app.use(express.json());

app.use('/', require('./router/postsRouter'));

app.listen(3000);