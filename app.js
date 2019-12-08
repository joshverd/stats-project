const express = require('express');
const http = require('http');
const path = require('path');
const bodyParser = require('body-parser');

// Importing the config file
const config = require('./config.js');

// Express app setup
const app = express();
const server = http.createServer(app);

// bodyParser for 'POST' requests
app.use(bodyParser());

// Public folder will server static assets
app.use(express.static(path.join(__dirname, 'public')));

// Starting the server
server.listen(config.backend.port, () => {
  console.log(`Backend started on port ${config.backend.port}.`);
});
