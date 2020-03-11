const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const cors = require('cors');

app.set("view engine", "ejs");
app.use(cors());
app.use(express.static("public"));

var port = 8888;

app.use(bodyParser.json());

app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

var db = {
  newTask: "",
  tasks: [
    { id: "1", title: "Task 1", done: "false", edit: "false" },
    { id: "2", title: "Task 2", done: "true", edit: "false" }
  ],
  subtasks: [
    { id: "1", task_id: 1, title: "Sub Task 1", done: "false", edit: "false" },
    { id: "2", task_id: 1, title: "Sub Task 2", done: "false", edit: "true" },
  ]
};

app.listen(port, function() {
  console.log(`Listening on port ${port}`);
});

app.get("/", function(req, res) {
  res.json({ status: "ok" });
});

app.post("/uploadclip", function(req, res) {
  console.log("Clip: ", req.body.content);
  res.json({ clip: req.body.content });
});

app.get("/all/", function(req, res) {
  res.json(db.tasks);
});

app.get("/delete/:id", function(req, res) {
  res.redirect("/");
});

app.get("/edit/:id", function(req, res) {
  console.log("editing todo with id: ", req.params.id);
  res.end("ok");
});

app.post("/update", function(req, res) {
  //var id = new mongodb.ObjectID(req.body.id);
  res.redirect("/");
});

app.post("/todos", (req, res) => {
  res.redirect("/");
});
