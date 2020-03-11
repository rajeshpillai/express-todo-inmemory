const routes = require('express').Router();

const todos = require("./todos");
const subtasks = require("./subtasks");

routes.use('/api/todos', todos); 
routes.use('/api/subtasks', subtasks);

module.exports = routes;