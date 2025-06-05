const mongoose = require('mongoose');
const Task = require('../../domain/entities/Task');
const ITaskRepository = require('../../domain/interfaces/ITaskRepository');

// Schema de MongoDB
const taskSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, default: '' },
    completed: { type: Boolean, default: false },
    createdAt: { type: Date, default: Date.now }
});

const TaskModel = mongoose.model('Task', taskSchema);

class MongoTaskRepository extends ITaskRepository {
    async create(task) {
        const taskDoc = new TaskModel({
            title: task.title,
            description: task.description,
            completed: task.completed,
            createdAt: task.createdAt
        });

        const savedTask = await taskDoc.save();
        return new Task(
            savedTask._id.toString(),
            savedTask.title,
            savedTask.description,
            savedTask.completed,
            savedTask.createdAt
        );
    }

    async findById(id) {
        const taskDoc = await TaskModel.findById(id);
        if (!taskDoc) return null;

        return new Task(
            taskDoc._id.toString(),
            taskDoc.title,
            taskDoc.description,
            taskDoc.completed,
            taskDoc.createdAt
        );
    }

    async findAll() {
        const taskDocs = await TaskModel.find();
        return taskDocs.map(doc => new Task(
            doc._id.toString(),
            doc.title,
            doc.description,
            doc.completed,
            doc.createdAt
        ));
    }

    async update(id, task) {
        const updatedTask = await TaskModel.findByIdAndUpdate(
            id,
            {
                title: task.title,
                description: task.description,
                completed: task.completed
            },
            { new: true }
        );

        if (!updatedTask) return null;

        return new Task(
            updatedTask._id.toString(),
            updatedTask.title,
            updatedTask.description,
            updatedTask.completed,
            updatedTask.createdAt
        );
    }

    async delete(id) {
        const result = await TaskModel.findByIdAndDelete(id);
        return result !== null;
    }
}

module.exports = MongoTaskRepository; 