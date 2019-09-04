// Dependencies
// =============================================================
var express = require("express");
var path = require("path");

var userlist = [];
var clientArray = {};

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3001;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});

// Displays new user addition
app.get("/api/new", function (req, res) {
  res.sendFile(path.join(__dirname, "new.html"));
});

// Displays a table list
app.get("/api/matches/:user", function (req, res) {
    var client = req.params.user;
  console.log(client);
  for (var i = 0; i < userlist.length; i++) {
    if (chosen === userlist[i].routeName) {
      clientArray = characters[i];
      for (var i = 0; i < characters.length; i++) {
        if (clientArray.q5 === characters[i].q5) {
            if (clientArray.q4 === characters[i].q4) {
                if (clientArray.q3 === characters[i].q3) {
                    if (clientArray.q2 === characters[i].q2) {
                        if (clientArray.q1 === characters[i].q1) {
                            return res.json(characters[i]);
                          }
                      }
                  }
              }
        }
      }
    
    }
  }


});

// get the current tables that are on the wait list
// Create a reserve post route
app.post("/api/new", function (req, res) {
  var newClient =req.body;
  console.log(newClient);
  userlist.push(newClient);
  // userlist.push(
  //   {
  //     userName: req.body.userName || "",
  //     imageLink: req.body.imageLink || "",
  //     q1: req.body.q1 || "",
  //     q2: req.body.q2 || "",
  //     q3: req.body.q3 || "",
  //     q4: req.body.q4 || "",
  //     q5: req.body.q5 || ""
  //   }
  //   );
    res.json(newClient);
});


// Starts the server to begin listening
// =============================================================
app.listen(PORT, function () {
  console.log("App listening on PORT " + PORT);
});
