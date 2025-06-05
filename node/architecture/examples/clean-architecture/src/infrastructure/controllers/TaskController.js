const CreateTaskUseCase = require('../../application/use-cases/CreateTaskUseCase');
const GetTaskUseCase = require('../../application/use-cases/GetTaskUseCase');
const GetAllTasksUseCase = require('../../application/use-cases/GetAllTasksUseCase');
const UpdateTaskUseCase = require('../../application/use-cases/UpdateTaskUseCase');
const DeleteTaskUseCase = require('../../application/use-cases/DeleteTaskUseCase');

class TaskController {
    constructor(taskRepository) {
        this.createTaskUseCase = new CreateTaskUseCase(taskRepository);
        this.getTaskUseCase = new GetTaskUseCase(taskRepository);
        this.getAllTasksUseCase = new GetAllTasksUseCase(taskRepository);
        this.updateTaskUseCase = new UpdateTaskUseCase(taskRepository);
        this.deleteTaskUseCase = new DeleteTaskUseCase(taskRepository);
    }

    async createTask(req, res) {
        try {
            const { title, description } = req.body;
            const task = await this.createTaskUseCase.execute(title, description);
            res.status(201).json(task);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    async getTask(req, res) {
        try {
            const { id } = req.params;
            const task = await this.getTaskUseCase.execute(id);
            if (!task) {
                return res.status(404).json({ error: 'Task not found' });
            }
            res.json(task);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    async getAllTasks(req, res) {
        try {
            const tasks = await this.getAllTasksUseCase.execute();
            res.json(tasks);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    async updateTask(req, res) {
        try {
            const { id } = req.params;
            const { title, description, completed } = req.body;
            const task = await this.updateTaskUseCase.execute(id, title, description, completed);
            if (!task) {
                return res.status(404).json({ error: 'Task not found' });
            }
            res.json(task);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    async deleteTask(req, res) {
        try {
            const { id } = req.params;
            const success = await this.deleteTaskUseCase.execute(id);
            if (!success) {
                return res.status(404).json({ error: 'Task not found' });
            }
            res.status(204).send();
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
}

module.exports = TaskController; 