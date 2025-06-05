const userRepository = require('../repositories/UserRepository');

class UserService {
    async createUser(userData) {
        // Validar que el email no exista
        const existingUser = await userRepository.findByEmail(userData.email);
        if (existingUser) {
            throw new Error('El email ya está registrado');
        }

        // Crear el usuario
        return await userRepository.create(userData);
    }

    async getUserById(id) {
        const user = await userRepository.findById(id);
        if (!user) {
            throw new Error('Usuario no encontrado');
        }
        return user;
    }

    async getAllUsers() {
        return await userRepository.findAll();
    }

    async updateUser(id, userData) {
        // Verificar que el usuario existe
        const user = await userRepository.findById(id);
        if (!user) {
            throw new Error('Usuario no encontrado');
        }

        // Si se está actualizando el email, verificar que no exista
        if (userData.email && userData.email !== user.email) {
            const existingUser = await userRepository.findByEmail(userData.email);
            if (existingUser) {
                throw new Error('El email ya está registrado');
            }
        }

        return await userRepository.update(id, userData);
    }

    async deleteUser(id) {
        const user = await userRepository.findById(id);
        if (!user) {
            throw new Error('Usuario no encontrado');
        }
        return await userRepository.delete(id);
    }
}

module.exports = new UserService(); 