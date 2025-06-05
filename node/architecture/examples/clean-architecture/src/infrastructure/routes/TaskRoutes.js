const express = require('express');
const TaskController = require('../controllers/TaskController');

function createTaskRoutes(taskRepository) {
    const router = express.Router();
    const taskController = new TaskController(taskRepository);

    router.post('/', (req, res) => taskController.createTask(req, res));
    router.get('/:id', (req, res) => taskController.getTask(req, res));
    router.get('/', (req, res) => taskController.getAllTasks(req, res));
    router.put('/:id', (req, res) => taskController.updateTask(req, res));
    router.delete('/:id', (req, res) => taskController.deleteTask(req, res));

    return router;
}

module.exports = createTaskRoutes; 