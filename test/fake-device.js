/*!
 * Chessfix - chess engine tuning tool
 * by Francesco Bianco <bianco@javanile.org>
 * Copyright(c) 2016-2017 Javanile.org
 * MIT Licensed
 */

const spawn = require('child_process').spawn;
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const path = require('path');
const fs = require('fs');
const cosha = require('../src/cosha');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.post('/i', function (req, res) {
    res.send({
        ip: cosha.getMyAddress(),
        id: '5858d286d1ebfa8a13a0676fd4ec0a89',
        rw: ['r@D1:on/off', 'w@D2:on/off']
    });
});

app.post('/r', function (req, res) {
    res.send({
        v: 1
    });
});

app.post('/w', function (req, res) {
    res.send({
        v: 1
    });
});

app.listen(1981, function () {
    console.log('Fake device listening...');
});
