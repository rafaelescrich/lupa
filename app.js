var express = require("express");

var app = require("express")();

var handlerUser = require("./userHandler");
var handlerRed = require("./redHandler");

app.use(express.static(__dirname + '/app'));
app.use("/js", express.static(__dirname + "/app/js"));
app.use("/img", express.static(__dirname + "/app/img"));
app.use("/css", express.static(__dirname + "/app/css"));

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

app.listen(3000, function(){
	console.log("listening on: http://127.0.0.1:3000");
});
