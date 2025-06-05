class Task {
    constructor(id, title, description, completed = false, createdAt = new Date()) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.completed = completed;
        this.createdAt = createdAt;
    }

    complete() {
        this.completed = true;
    }

    uncomplete() {
        this.completed = false;
    }

    update(title, description) {
        this.title = title;
        this.description = description;
    }

    toJSON() {
        return {
            id: this.id,
            title: this.title,
            description: this.description,
            completed: this.completed,
            createdAt: this.createdAt
        };
    }
}

module.exports = Task; 