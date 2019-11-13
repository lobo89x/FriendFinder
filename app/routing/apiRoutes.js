import userlist from "../data/friends"

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