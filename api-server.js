const express = require("express");
const cors = require('cors');
const app = express();

const routes = require("./api");



var port = 4444;

app.use(cors());
app.use(express.json());

app.use(
  express.urlencoded({
    extended: false
}));

app.use('/', routes);
  
app.listen(port, function () {
  console.log(`Listening on port ${port}`);
});
  
//const todos = require('./api/todos.js');
//app.use('/api/todos', todos); 
// require("./api")(app);



