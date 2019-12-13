const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/', express.static(path.join(__dirname, '../public')));
app.use('/:hostId', express.static(path.join(__dirname, '../public')));
app.use('http://localhost:3002/bundle.js', express.static(path.join(__dirname, '../../suggestions-module/client/dist/bundle.js')));
app.use('http://localhost:3003/bundle.js', express.static(path.join(__dirname, '../photo-gallery-module-gs/public/bundle.js')));
app.use('http://localhost:3004/index.js', express.static(path.join(__dirname, '../reviews-module/public/index.js')));

app.listen(port, () => console.log(`Proxy server listening on port ${port}!`));