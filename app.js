const express = require('express');
var bodyParser = require('body-parser');
const ejs = require("ejs");
const helmet = require("helmet");

const app = express();

app.set('view engine', ejs);
app.set('views', './views');

app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/public', express.static(__dirname + '/public'));

const mainRouter = require('./router/mainRouter');
app.use('/', mainRouter);
//app.use('/test', mainRouter); http://localhost:3000/test

app.listen(3000, function(req,res){
    console.log('start');
});