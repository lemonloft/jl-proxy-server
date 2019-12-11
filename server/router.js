const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/', express.static(path.join(__dirname, '../public')));
app.use('/:hostId', express.static(path.join(__dirname, '../public')));
app.use('http://localhost:3001/bundle.js', express.static('https://lemonloftreservation.s3-us-west-1.amazonaws.com/bundle.js'));
app.use('http://localhost:3003/bundle.js', express.static(path.join(__dirname, '../photo-gallery-module-gs/public/bundle.js')));
app.use('http://localhost:3004/index.js', express.static(path.join(__dirname, '../reviews-module/public/index.js')));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));