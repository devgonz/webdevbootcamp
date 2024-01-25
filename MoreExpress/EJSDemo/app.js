var express = require("express");
var app = express();

app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/fallinlovewith/:thing", function(req, res) {
    var thing = req.params.thing;
    res.render("love", {thingVar: thing});
});

app.get("/", function(req, res) {
   res.render("home"); 
});

app.get("/posts", function(req, res) {
   var posts = [
        {title: "Post 1", author: "Suzy"},
        {title: "Post 2", author: "Ben"},
        {title: "Post 3", author: "Kyle"}
   ];
   
   res.render("posts", {posts: posts});
});

app.listen(process.env.PORT, process.env.IP, function() {
   console.log("Server is listening."); 
});