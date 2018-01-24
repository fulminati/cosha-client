/*!
 * COSHA Client
 * by Francesco Bianco <bianco@javanile.org>
 * Copyright(c) 2016-2017 Javanile.org
 * MIT Licensed
 */

const ifaces = require('os').networkInterfaces();
const request = require('request');

module.exports = {

    getMyAddress: function ()
    {
        var address;

        for (var dev in ifaces) {
            ifaces[dev].filter((details) => details.family === 'IPv4' && details.internal === false ? address = details.address: undefined);
        }

        return address;
    },

    findDevices: function (cb)
    {
        var resp = {
            devices: []
        };

        const my = this.getMyAddress();
        const ip = my.split('.');
        const nt = ip[0]+'.'+ip[1]+'.'+ip[2]+'.';

        for (var i = 1; i < 255; i++) {
            var ping = 'http://' + nt + i + ':1981/i';
            request(ping, {method: 'POST', json: true}, function (err, res, body) {
                if (err) { return; }
                resp.devices.push(body);
            });
        }

        setTimeout(function() { cb(resp); }, 1000);
    }

};


