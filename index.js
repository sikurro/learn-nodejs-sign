/* import module */
var express = require('express');
var bodyParser = require('body-parser');
var PORT = 8012;

var app = express();

var authenticateController = require('./controllers/authenticate-controller');
var registerController = require('./controllers/register-controller');

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

/* route to handle login and registration*/
app.post('/api/register', registerController.register);
app.post('/api/authenticate', authenticateController.authenticate);

app.listen(PORT);
console.log("server running on http://localhost:" + PORT);