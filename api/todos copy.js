var express = require('express');
const db = require('../data/todos-db');
var router = express.Router()


console.log("DB: ", db);

// middleware that is specific to this router
router.get("/", function (req, res) {
  res.json(db.tasks);
});


router.get("/:id", function (req, res) {
  let todo = findById(req.params.id);
  res.json(todo);
});

function findById(id) {
  let todo = db.tasks.find((t) => {
    return id == t.id;
  });

  return todo;
}

router.delete("/:id", function (req, res) {
  console.log(`Deleting todo with id ${req.params.id}`);
  let todo = findById(req.params.id);
  if (null == todo) {
    return res.status(404).send("not found");
  }
  let todos = db.tasks.filter((t) => {
    return req.params.id != t.id;
  });

  db.tasks = todos;

  res.status(200).send("ok");
});

//Update
router.put("/:id", function (req, res) {
  let id = req.params.id;
  console.log(`Updating todo with id ${id}`);
  let todo = findById(id); // Here the todo object is returned by ref.
  if (null == todo) {
    return res.status(404).send("not found");
  }

  Object.keys(req.body).forEach(key => {
    todo[key] = req.body[key];
  });


  res.json(todo);
});


router.post("/", function (req, res) {
  console.log("Posting new todo: ", req.body);
  let newTodo = req.body;
  newTodo.id = +new Date();
  db.tasks.push(newTodo);
  res.status(200).json(newTodo);
});


module.exports = router;