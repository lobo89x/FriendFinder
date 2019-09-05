// Dependencies
// =============================================================
var express = require("express");
var path = require("path");

var userlist = [
      { userName: 'Lisa Hayes',
    imageLink: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fvignette.wikia.nocookie.net%2Frobotech%2Fimages%2F8%2F8b%2FRick_ep_5.jpg%2Frevision%2Flatest%2Fscale-to-width-down%2F350%3Fcb%3D20160128150037&imgrefurl=https%3A%2F%2Frobotech.fandom.com%2Fwiki%2FRick_Hunter&docid=TWg8uIsQICTb5M&tbnid=IMerZ-QjL-ZBZM%3A&vet=10ahUKEwjul8nS4LjkAhUK11kKHSDMDOgQMwhaKAowCg..i&w=350&h=253&bih=852&biw=1745&q=rick%20hunter%20robotech&ved=0ahUKEwjul8nS4LjkAhUK11kKHSDMDOgQMwhaKAowCg&iact=mrc&uact=8',
    q1: '4',
    q2: '3',
    q3: '5',
    q4: '3',
    q5: '2',
    routeName: 'lisahayes' },
    { userName: 'Rick Hunter',
    imageLink: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fvignette.wikia.nocookie.net%2Frobotech%2Fimages%2F8%2F8b%2FRick_ep_5.jpg%2Frevision%2Flatest%2Fscale-to-width-down%2F350%3Fcb%3D20160128150037&imgrefurl=https%3A%2F%2Frobotech.fandom.com%2Fwiki%2FRick_Hunter&docid=TWg8uIsQICTb5M&tbnid=IMerZ-QjL-ZBZM%3A&vet=10ahUKEwjul8nS4LjkAhUK11kKHSDMDOgQMwhaKAowCg..i&w=350&h=253&bih=852&biw=1745&q=rick%20hunter%20robotech&ved=0ahUKEwjul8nS4LjkAhUK11kKHSDMDOgQMwhaKAowCg&iact=mrc&uact=8',
    q1: '4',
    q2: '3',
    q3: '5',
    q4: '3',
    q5: '2',
    routeName: 'rickhunter' }
];
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

// Basic route that sends the user first to the AJAX Page
app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});

// Displays new user addition
app.get("/api/new", function (req, res) {
  res.sendFile(path.join(__dirname, "new.html"));
});

// Displays new user addition
app.get("/api/matches", function (req, res) {
  res.sendFile(path.join(__dirname, "matches.html"));
});

// Displays a table list
app.get("/api/matches/:user", function (req, res) {
    var client = req.params.user;
  matchList = []
  console.log(client);
  for (var i = 0; i < userlist.length; i++) {
    if (client === userlist[i].routeName) {
      clientArray = userlist[i];
      for (var j = 0; j < userlist.length; j++) {
        if (clientArray.q5 === userlist[j].q5) {
            if (clientArray.q4 === userlist[j].q4) {
                if (clientArray.q3 === userlist[j].q3) {
                    if (clientArray.q2 === userlist[j].q2) {
                        if (clientArray.q1 === userlist[j].q1) {
                          if (clientArray.routeName != userlist[j].routeName) {
                            matchList.push(userlist[j]);  
                            //return res.json(matchList[i]);
                            res.status(200).json(matchList);
                          }
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
  newClient.routeName = newClient.userName.replace(/\s+/g, "").toLowerCase();
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
    console.log(userlist);
    //res.status(200).send("Your input has been accepted");
});


// Starts the server to begin listening
// =============================================================
app.listen(PORT, function () {
  console.log("App listening on PORT " + PORT);
});
