var express = require("express");
var app = express();

// Visiting "/"
app.get("/", function(req, res) {
   res.send("Hi there, welcome to my assignment."); 
});

// Visiting "/speak/:animal"
app.get("/speak/:animal", function(req, res) {
   var sounds = {
        pig: "Oink",
        cow: "Moo",
        dog: "Woof Woof!",
        cat: "I hate you human"
   }
   var animal = req.params.animal.toLowerCase();
   var sound = sounds[animal];
   res.send("The " + animal + " says '" + sound + "'");
});

// Visiting "/repeat/:word/:num"
app.get("/repeat/:word/:num", function(req, res) {
   var word = req.params.word;
   var num = Number(req.params.num);
   var str = "";
   
   for (var i = num; i--; ) {
       str += word + " ";
   }
   
   res.send(str);
});

// Visiting "*"
app.get("*", function(req, res) {
   res.send("Sorry, page not found... What are you doing with your life?"); 
});

app.listen(process.env.PORT, process.env.IP, function() {
    console.log("Server has started!!!");
});