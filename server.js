var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();
var PORT = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// Tables (DATA)
// =============================================================
var tables = [{
  customerName: "Charlotte",
  phoneNumber: "1234567890",
  customerEmail: "charlotte@gmail.com",
  customerID: "Charlotte's Table",
}];

var waitlist = [];

// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "homepage.html"));
});

app.get("/tables", function(req, res) {
  res.sendFile(path.join(__dirname, "tables.html"));
});

app.get("/reserve", function(req, res) {
  res.sendFile(path.join(__dirname, "reserve.html"));
});

// Get all tables
app.get("/api/tables", function(req, res) {
  res.json(tables);
});

// Get all waitlist
app.get("/api/waitlist", function(req, res) {
  res.json(waitlist);
});

// Create New Table - takes in JSON input
app.post("/api/new", function(req, res) {
  var newtable = req.body;

  console.log(newtable);

  if (table.length < 5) {
    table.push(newtable);
  }
  else {
    waitlist.push(newtable);
  }

  res.json(newtable);
});

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
