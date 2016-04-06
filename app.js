var express = require("express");

var app = require("express")();

var handlerUser = require("./userHandler");
var handlerRed = require("./redHandler");


// Authenticator
app.use(function(req, res, next) {
    var auth;

    // check whether an autorization header was send    
    if (req.headers.authorization) {
      // only accepting basic auth, so:
      // * cut the starting "Basic " from the header
      // * decode the base64 encoded username:password
      // * split the string at the colon
      // -> should result in an array
      auth = new Buffer(req.headers.authorization.substring(6), 'base64').toString().split(':');
    }

    // checks if:
    // * auth array exists 
    // * first value matches the expected user 
    // * second value the expected password
    if (!auth || auth[0] !== 'user' || auth[1] !== 'password') {
        // any of the tests failed
        // send an Basic Auth request (HTTP Code: 401 Unauthorized)
        res.statusCode = 401;
        // MyRealmName can be changed to anything, will be prompted to the user
        res.setHeader('WWW-Authenticate', 'Basic realm="MyRealmName"');
        // this will displayed in the browser when authorization is cancelled
        res.end('Unauthorized');
    } else {
        // continue with processing, user was authenticated
        next();
    }
});

app.use(express.static(__dirname + '/public'));

app.get("/users", function (req, res) {
	var users = handlerUser.onlyTheUsers();
	res.json(users);
});


app.get("/reds", function (req, res) {
	var reds = handlerRed.onlyTheReds();
  res.json(reds);
});

app.get("/users/:id", function (req, res) {
	var id = req.params.id;
	var color = req.query.color;

	res.send("Yes? You asked for customer '" + id +
		"' and passed the color = '" + color + "'");
});

app.post("/users", function (req, res) { res.send("all the HTTP verb looks the same");});

app.patch("/users", function (req, res) { res.send("all the HTTP verb looks the same");});

app.delete("/users", function (req, res) { res.send("all the HTTP verb looks the same");});

app.listen(3000);

console.log("listening on: http://127.0.0.1:3000");
