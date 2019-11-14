var userlist = require("../data/friends")

module.exports = function(app) {
    
    var clientArray = {};
    var matchList = [];

    // Displays a full friends JSON
    app.get ("/api/friends", function(req, res){
        res.json(friends);
    });
    // runs the matchmaker process
    app.post("/api/new", function (req, res) {
        var clientArray = req.body;
      matchList = []
      console.log(clientArray);
      for (var i = 0; i < userlist.length; i++) {
        // if (client === userlist[i].routeName) {
        //   clientArray = userlist[i];
          for (var j = 0; j < userlist.length; j++) {
            if (clientArray.q10 === userlist[j].q10) {
                if (clientArray.q9 === userlist[j].q9) {
                    if (clientArray.q8 === userlist[j].q8) {
                        if (clientArray.q7 === userlist[j].q7) {
                            if (clientArray.q6 === userlist[j].q6) {
                                if (clientArray.q5 === userlist[j].q5) {
                                    if (clientArray.q4 === userlist[j].q4) {
                                        if (clientArray.q3 === userlist[j].q3) {
                                            if (clientArray.q2 === userlist[j].q2) {
                                                if (clientArray.q1 === userlist[j].q1) {
                                                  
                    
                                                    // console.log(matchList)
                                                    // matchList.push(userlist[j]);  
                                                    //return res.json(matchList[i]);
                                                    return res.status(200).json(userlist[j]);
                                                    //res.json(matchList);
                                                  
                                                  }
                                              }
                                          }
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
//     app.post("/api/new", function (req, res) {
//       var newClient =req.body;
//       newClient.routeName = newClient.userName.replace(/\s+/g, "").toLowerCase();
//       console.log(newClient);
//     //   userlist.push(newClient);
//       // userlist.push(
//       //   {
//       //     userName: req.body.userName || "",
//       //     imageLink: req.body.imageLink || "",
//       //     q1: req.body.q1 || "",
//       //     q2: req.body.q2 || "",
//       //     q3: req.body.q3 || "",
//       //     q4: req.body.q4 || "",
//       //     q5: req.body.q5 || ""
//       //   }
//       //   );
//         res.json(newClient);
//         console.log(userlist);
//         //res.status(200).send("Your input has been accepted");
//     });

}