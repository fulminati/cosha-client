/*!
 * COSHA Client
 * by Francesco Bianco <bianco@javanile.org>
 * Copyright(c) 2016-2017 Javanile.org
 * MIT Licensed
 */

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cosha = require('./cosha');

//
app.use(express.static(__dirname + "/../public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//
app.post('/i', function (req, res) {
    cosha.client.i(function (data) {
        res.send(data);
    });
});

//
app.post('/r', function (req, res) {
    cosha.client.r(function (data) {
        res.send(data);
    });
});

//
app.post('/w', function (req, res) {
    cosha.client.w(function (data) {
        res.send(data);
    });
});

//
app.listen(1983, function () {
    console.log('COSHA Client: listening...');
});
