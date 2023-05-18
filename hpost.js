const http = require('http');
const express = require("express")
const app = express()
const path = require("path")
const collection = require("./hmongo");
const querystring = require('querystring');

var qs;

http.createServer(function (req, res) {

    var data1 = '';

    req.on('data', function (chunk) {

        console.log(chunk);

        data1 += chunk;

    });

    req.on('end', async () => {
        qs = querystring.parse(data1);
        console.log(qs);
        const data = {
           fname: qs['fname'],

           mno : qs["mno"],

           add : qs["add"],

           city :qs["city"],

           prof :qs["prof"],

           cname :qs["cname"],

           lname : qs["lname"],

           em : qs["em"],

           state:qs['state'],

           inc:qs["inc"],

           cno:qs["cno"],

           onam:qs["onam"],

           hloc:qs["hloc"],

           thou:qs["thou"],

           blue:qs["blue"],

           water:qs["water"],

           wtc:qs["wtc"],

           rsr:qs["rsr"],

           fmb:qs["fmb"],

           topa:qs["topa"],

           lmv:qs["lmv"],

           gv:qs["gv"],

           motc:qs["motc"],

           serv:qs["serv"],

           amount:qs["amount"],

           insreq:qs["insreq"],

           intreq:qs["intreq"],
        }

        await collection.insertMany([data]);
        res.write("hello "+fname+"your loan request has been sent successfully")

        res.end();

    });

}).listen(7654); 
console.log('Server has Started.......');