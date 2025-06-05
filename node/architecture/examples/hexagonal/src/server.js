const express = require('express');
const MongoConnection = require('./adapters/secondary/database/MongoConnection');
const MongoProductRepository = require('./adapters/secondary/database/MongoProductRepository');
const ProductService = require('./application/services/ProductService');
const createProductRoutes = require('./adapters/primary/rest/ProductRoutes');

async function startServer() {
    try {
        // Conectar a MongoDB
        await MongoConnection.connect();

        // Crear instancias
        const productRepository = new MongoProductRepository();
        const productService = new ProductService(productRepository);

        // Configurar Express
        const app = express();
        app.use(express.json());

        // Configurar rutas
        app.use('/api/products', createProductRoutes(productService));

        // Iniciar servidor
        const PORT = process.env.PORT || 3000;
        app.listen(PORT, () => {
            console.log(`Servidor ejecutándose en el puerto ${PORT}`);
        });

        // Manejar cierre de la aplicación
        process.on('SIGINT', async () => {
            await MongoConnection.disconnect();
            process.exit(0);
        });
    } catch (error) {
        console.error('Error al iniciar el servidor:', error);
        process.exit(1);
    }
}

startServer(); 