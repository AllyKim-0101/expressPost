var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));
//all default type of files will be ejs so no need to put name of file.ejs at the end 
app.set("view engine", "ejs");

let friends = ["Casey", "Adam", "Ann", "Anne"];

app.get("/", function (req, res) {
    res.render("home");
});

app.get("/friends", function (req, res) {
    res.render("friends", { friends: friends });
});

//post is used when we add new data
//npm body-parse to be installed
app.post("/addfriend", function (req, res) {
    let newFriend = req.body.newfriend;
    friends.push(newFriend);
    //redirect("/friends") will allow the outcome to be redirected to "/friends"
    res.redirect("/friends")
})

app.listen(process.env.PORT, process.env.IP, function () {
    console.log("Server started!!")
}
)
