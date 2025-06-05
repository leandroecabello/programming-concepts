const express = require('express');
const MongoConnection = require('./database/MongoConnection');
const MongoTaskRepository = require('./database/MongoTaskRepository');
const createTaskRoutes = require('./routes/TaskRoutes');

async function startServer() {
    try {
        // Conectar a MongoDB
        await MongoConnection.connect();

        // Crear instancia del repositorio
        const taskRepository = new MongoTaskRepository();

        // Configurar Express
        const app = express();
        app.use(express.json());

        // Configurar rutas
        app.use('/api/tasks', createTaskRoutes(taskRepository));

        // Iniciar servidor
        const PORT = process.env.PORT || 3000;
        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        });

        // Manejar cierre de la aplicación
        process.on('SIGINT', async () => {
            await MongoConnection.disconnect();
            process.exit(0);
        });
    } catch (error) {
        console.error('Error starting server:', error);
        process.exit(1);
    }
}

startServer(); 