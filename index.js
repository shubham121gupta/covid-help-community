var express = require('express');
var app = express();
var cors = require('cors');
var port = process.env.port || 3000;

app.use(cors());

// // So process.env.PORT || 3000 means: whatever is in the environment variable PORT, or 3000 if there's nothing there.
// // So you pass that app.listen, or to app.set('port', ...), and that makes your server be able to accept a parameter from the environment what port to listen on.

app.use(express.static('public'));

//example : without callback
// var fs = require("fs");
// console.log("Program started");
// var data = fs.readFileSync("reference link.txt");
// console.log(data.toString());
// console.log("Program ended");

// example : with callback
// var fs = require("fs");
// console.log("program started");
// fs.readFile("reference link.txt",function(err,data){
// if(err) return console.log(err);
// console.log(data.toString());
// });
// console.log("program ended");




//example : demo api
// app.get("/product",function(request,response){
//     response.json({"Message":"Welcome to Nodejs"})
// });

var bodyParser = require('body-parser');
// create application/x-www-form-urlencoded parser
app.use(bodyParser.urlencoded({ extended: true }));
// create application/json parser
app.use(bodyParser.json());


var masterController = require('./Controllers/MasterController')();
app.use("/api/master", masterController);






app.listen(port, function () {
//     res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    var datetime = new Date();
    var message = "Server runnning on Port:- " + port + "  Started at :- " + datetime;
    console.log(message);

});
