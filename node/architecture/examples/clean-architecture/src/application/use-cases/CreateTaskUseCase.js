const Task = require('../../domain/entities/Task');

class CreateTaskUseCase {
    constructor(taskRepository) {
        this.taskRepository = taskRepository;
    }

    async execute(taskData) {
        // Validar datos de entrada
        if (!taskData.title) {
            throw new Error('El título es requerido');
        }

        // Crear entidad de dominio
        const task = new Task(
            null, // El ID será asignado por el repositorio
            taskData.title,
            taskData.description || '',
            false,
            new Date()
        );

        // Persistir la tarea
        const createdTask = await this.taskRepository.create(task);

        return createdTask;
    }
}

module.exports = CreateTaskUseCase; 