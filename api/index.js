const routes = require('express').Router();

const todos = require("./todos");

routes.use('/api/todos', todos); 

module.exports = routes;