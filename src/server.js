/*!
 * cosha-client
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

app.post('/i', function (req, res) {
    res.send({
        devices: devices
    });
});

cosha.findDevices(function(resp) {
    devices = resp.devices;
    console.log(devices);

    app.listen(8864, function () {
        console.log('Listening on port 8864');
    });
});
