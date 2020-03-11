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

module.exports = db;