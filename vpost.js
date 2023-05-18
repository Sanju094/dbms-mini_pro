const http = require('http');
const express = require("express")
const app = express()
const path = require("path")
const collection = require("./vmongo");
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

           vehicle:qs["tyofveh"],

           vehcomp:qs["vehcomp"],

           vehmake:qs["vehmake"],

           yrofman:qs["yrofman"],

           use:qs["use"],

           owners:qs["nown"],

           vehexp:qs["vehexp"],

           vehwei:qs["vehwei"],

           color:qs["color"],

           regno:qs["regno"],

           code:qs["code"],

           eng:qs["eng"],

           chas:qs["chas"],

           fuel:qs["fuel"],

           fea:qs["fea"],

           tyre:qs["tyre"],

           market:qs["market"],

           amo:qs["amo"],

           insreq:qs["insreq"],

           intreq:qs["intreq"],
        }
        fname= qs['fname']
        await collection.insertMany([data]);
        res.write("hello "+fname+"your loan request has been sent successfully")

        res.end();

    });

}).listen(5467); 
console.log('Server has Started.......');