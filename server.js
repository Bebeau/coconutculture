const config = require('./config/keys');
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
var request = require('superagent');

const app = express();

// bodyParser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// API routes
// require('./server/routes')(app);
var payment = require('./server/routes/api/payment.js');
app.use(payment);

// Serve any static files
app.use(express.static(path.join(__dirname, 'client/app/build')));
// Handle React routing, return all requests to React app
app.get('*', function(req, res) {
	res.sendFile(path.join(__dirname, 'client', 'app', 'build', 'index.html'));
});

const port = process.env.PORT || 5000;
// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));
