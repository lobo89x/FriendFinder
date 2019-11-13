// Dependencies
// =============================================================
var express = require("express");
var path = require("path");


var clientArray = {};
var matchList = [];

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3001;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes
// =============================================================


// Displays new user addition
app.get("/api/matches", function (req, res) {
  res.sendFile(path.join(__dirname, "matches.html"));
});




// Starts the server to begin listening
// =============================================================
app.listen(PORT, function () {
  console.log("App listening on PORT " + PORT);
});
