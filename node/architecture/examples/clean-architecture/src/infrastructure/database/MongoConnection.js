const mongoose = require('mongoose');

class MongoConnection {
    static async connect() {
        try {
            await mongoose.connect('mongodb://localhost:27017/clean-architecture', {
                useNewUrlParser: true,
                useUnifiedTopology: true
            });
            console.log('MongoDB connected successfully');
        } catch (error) {
            console.error('MongoDB connection error:', error);
            throw error;
        }
    }

    static async disconnect() {
        try {
            await mongoose.disconnect();
            console.log('MongoDB disconnected successfully');
        } catch (error) {
            console.error('MongoDB disconnection error:', error);
            throw error;
        }
    }
}

module.exports = MongoConnection; 