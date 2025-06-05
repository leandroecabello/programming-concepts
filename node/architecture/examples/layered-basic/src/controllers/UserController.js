const userService = require('../services/UserService');

class UserController {
    async createUser(req, res) {
        try {
            const user = await userService.createUser(req.body);
            res.status(201).json(user);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    async getUserById(req, res) {
        try {
            const user = await userService.getUserById(req.params.id);
            res.json(user);
        } catch (error) {
            res.status(404).json({ error: error.message });
        }
    }

    async getAllUsers(req, res) {
        try {
            const users = await userService.getAllUsers();
            res.json(users);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async updateUser(req, res) {
        try {
            const user = await userService.updateUser(req.params.id, req.body);
            res.json(user);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    async deleteUser(req, res) {
        try {
            await userService.deleteUser(req.params.id);
            res.status(204).send();
        } catch (error) {
            res.status(404).json({ error: error.message });
        }
    }
}

module.exports = new UserController(); 