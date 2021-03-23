const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const apiRouter = require('./api/apiRouter');
const hostname = '127.0.0.1';
const port = 3000;

// Configure bodyParser
const jsonParser = bodyParser.json();
const urlEncodeParser = bodyParser.urlencoded({ extended: false });
app.use(jsonParser);
app.use(urlEncodeParser);

// Configure cors
app.use(cors());

// Configure the router
app.use('/api', apiRouter);

// Get
app.get('/', (request, response) => {
    response.send(`<h2>Welcome to Express Server of Employee Portal</h2>`);
});
app.listen(port, hostname, () => {
    console.log(`Express Server is Started at http://${hostname}:${port}`);
});