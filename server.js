var express = require('express');
var fs = require('fs');
var path = require('path');
var sqlite3 = require('sqlite3').verbose();
var app = express();

app.set("view engine", "ejs")
app.engine('html', require('ejs').renderFile);

app.use(express.static(path.join(__dirname, 'public')));

// Set up server
var server = app.listen(process.env.PORT || 8081, function () {
    var port = server.address().port;
    console.log("API running on port: ", port);
});

app.get("/", function (req, res) {
    res.render("index.html")
});

app.get("/WhoMadeThisApp", function (req, res) {
    // var db = new sqlite3.Database('db.db');
    // db.all(`SELECT Name FROM WhoMadeThisApp`, function(err,rows) {
    // 	res.send(rows);
    // });
});