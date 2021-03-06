'use strict';

//required dependencies (including 3rd party middlewares)
var express = require('express');
var http = require('http');
var path = require('path');
var bodyParser = require('body-parser');



//instantiate express application
var app = express();


//set api directory
app.set('api', path.join(__dirname, '/app/api'));

//set node http server port
app.set('port', process.env.PORT || 3000);
//configure body-parser for JSON
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

//database connection
var mongoose = require('mongoose');//mongoose orm
mongoose.connect('mongodb://scossi:123456@ds019876.mlab.com:19876/mobile_workers_tcc');
var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

//error handlers
app.use(function(err, req, res, next){
    res.status(res.status || 500);
    res.render('Mobile Worker API Error', {
        message:err.message,
        error:err.stack
    });
});

/** API Routes **/
//router middleware
var router = express.Router();
//routes implementation modules
var routes = require('./api/routes');

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

router.get('/api', routes.welcomeAPI);//api end point
router.post('/api/addUserGeolocation', routes.addUserGeolocation);//create a new recipe type (POST)
router.post('/api/addSampleOne', routes.addSampleOne);//create a new recipe type (POST)
router.post('/api/addSampleTwo', routes.addSampleTwo);//create a new recipe type (POST)
router.post('/api/addSampleThree', routes.addSampleThree);//create a new recipe type (POST)
router.post('/api/addUser', routes.addUser);//create a new recipe type (POST)
router.post('/api/problem', routes.addProblem);//create a new recipe type (POST)
router.get('/api/getProblemsNearOneKm', routes.getProblemsNearOneKm);


app.use('/', router);
var jobs = require('./api/jobs');

//create server & listen on port 3000
var server = http.createServer(app).listen(app.get('port'), function(){
    //var host = server.address().address;
    //var port = server.address().port;
    console.log("Subiu");
    //console.log('running at http://' + host + ':' + port);
});

//export app
exports = module.exports = app;