var express = require('express');
var engine = require('ejs-locals');
var app = express();

app.use(express.static(__dirname + '/public'));

app.listen(process.env.PORT || 5000);
