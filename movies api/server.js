var express = require('express'); 
var http = require('http');
var routes = require('./api/routes/movies.js');
var bodyParser = require('body-parser');
var cors = require('cors');
var app = express();
app.use(bodyParser.urlencoded({exteded:true}));
app.use(bodyParser.json());
app.use(cors());

routes(app);
app.listen(3001);

console.log("server started");