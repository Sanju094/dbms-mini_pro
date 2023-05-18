const http = require('http');
const express = require("express")
const app = express()
const path = require("path")
const collection = require("./jmongo");
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

           comname :qs["comname"],

           lname : qs["lname"],

           em : qs["em"],

           state : qs["state"],

          

           inc:qs["inc"],

           cnum : qs["cnum"],

           tyoj :qs["tyoj"],

           carot : qs["carot"],

           gram : qs["gram"],

           hall : qs["hall"],

           amoreq : qs["amoreq"],

           insreq : qs["insreq"],

           intreq : qs["intreq"]

        }

        await collection.insertMany([data]);
        res.write("hello "+fname+"your loan request has been sent successfully")

        res.end();

    });

}).listen(4433); 
console.log('Server has Started.......');