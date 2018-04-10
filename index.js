const express = require('express');
const bodyParser = require('body-parser');
const http = require('http');
//const API_KEY = require('./apiKey');

var server = express()
// app.get('/', function (req, res) { res.send('Hello World') })
// app.listen(8080)

server.use(bodyParser.urlencoded({
    extended: true
}));

server.use(bodyParser.json());

server.post('/get-movie-details', (req, res) => {
    return res.json({
        speech: 'Hello World!' + req.get("result").get("action"),
        displayText: 'Hello World display text!' + req.get("result").get("action"),
        source: 'get-movie-details'
    });
}, (error) => {
    return res.json({
        speech: 'Something went wrong!',
        displayText: 'Something went wrong!',
        source: 'get-movie-details'
    });
});

server.listen((process.env.PORT || 8000), () => {
    console.log("Server is up and running...");
});