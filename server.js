

/* creating a basic express server */

var express = require("express");
var app = express();

//get request returning a random list 
app.get("/url",  (req, res, next ) => {
    res.json(['User1', "User2", "User3", "User4"]);
});

app.listen(3000, () => {
    console.log("server is running on port 3000");
});

/* REST mean s 'Representational State Transfer
and can be used in any format whether it be
an mobile application or a website 

Express is a backend framework that can be used with
any language

*/