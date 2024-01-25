var express = require("express");
var app = express();

app.get("/", function(req, res) {
    res.send("Hi there!");
});

app.get("/bye", function(req, res) {
   res.send("Goodbye!!"); 
});

app.get("/dog", function(req, res) {
    console.log("Someone has made a request to /dog.");
    res.send("MEOW!");
});

app.get("/r/:subreddit", function(req, res) {
    res.send("Welcome to a subreddit!");
});

app.get("*", function(req, res) {
    res.send("YOU ARE A STAR!!!");
});

app.listen(process.env.PORT, process.env.IP, function() {
    console.log("Server has started!!!");
});