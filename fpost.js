const http = require('http')
const express = require('express')
const app = express()
const path = require('path')
const querystring = require('querystring')
const collection = require('./fmongo')

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

           mess:qs['mess']
        }
        await collection.insertMany([data]);
        fname = qs['fname']
        res.write("hello "+fname+" your details has been recorded successfully")

        res.end();
    });
}).listen(8080)
console.log("server started.....")

