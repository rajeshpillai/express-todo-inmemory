const express = require("express");
const bodyParser = require("body-parser");
const cors = require('cors');
const todos = require('./api/todos.js');

const app = express();


var port = 4444;

app.use(cors());
app.use(bodyParser.json());

app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

app.use('/api/todos', todos);

app.listen(port, function () {
  console.log(`Listening on port ${port}`);
});


