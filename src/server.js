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

var devices = [];

app.use(express.static(__dirname + "/../public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//
app.post('/i', function (req, res) {
    res.send({
        devices: devices
    });
});

// Looking for network devices and start server
cosha.findDevices(function(resp) {
    devices = resp.devices;
    //console.log(devices);

    app.listen(1983, function () {
        console.log('COSHA Client: start...');
    });
});
