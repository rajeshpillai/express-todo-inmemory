const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.set("view engine", 'ejs');

app.use(express.static("public"));

var port = 8888;

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({
    extended: true
}));

var db;

app.listen(port, function () {
    console.log(`Listening on port ${port}`);
});



app.get("/", function (req, res) {
    res.json({
        status: "ok"
    });
});

app.get("/delete/:id", function (req, res) {
    res.redirect("/");
});

app.get("/edit/:id", function (req, res) {
    console.log("editing todo with id: ", req.params.id);
    res.end("ok");

});

app.post("/update", function (req, res) {
    //var id = new mongodb.ObjectID(req.body.id);
    res.redirect("/");
});

app.post('/todos', (req, res) => {
    res.redirect("/");
});