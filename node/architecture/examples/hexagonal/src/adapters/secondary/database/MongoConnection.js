const mongoose = require('mongoose');

class MongoConnection {
    static async connect() {
        try {
            await mongoose.connect('mongodb://localhost:27017/hexagonal-architecture', {
                useNewUrlParser: true,
                useUnifiedTopology: true
            });
            console.log('MongoDB conectado exitosamente');
        } catch (error) {
            console.error('Error de conexión a MongoDB:', error);
            throw error;
        }
    }

    static async disconnect() {
        try {
            await mongoose.disconnect();
            console.log('MongoDB desconectado exitosamente');
        } catch (error) {
            console.error('Error al desconectar MongoDB:', error);
            throw error;
        }
    }
}

module.exports = MongoConnection; 