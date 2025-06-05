# Clean Architecture Example

This is an example of Clean Architecture implementation in Node.js, demonstrating the principles of separation of concerns and dependency inversion.

## Project Structure

```
src/
├── domain/           # Enterprise business rules
│   ├── entities/     # Business objects
│   └── interfaces/   # Repository interfaces
├── application/      # Application business rules
│   └── use-cases/    # Use cases implementation
└── infrastructure/   # Frameworks and drivers
    ├── controllers/  # Express controllers
    ├── database/     # MongoDB implementation
    └── routes/       # Express routes
```

## Features

- Clean Architecture implementation
- MongoDB integration
- Express.js REST API
- Task management (CRUD operations)

## Prerequisites

- Node.js (v14 or higher)
- MongoDB (running locally on port 27017)

## Installation

1. Install dependencies:
```bash
npm install
```

2. Make sure MongoDB is running on your local machine

3. Start the application:
```bash
npm start
```

For development with auto-reload:
```bash
npm run dev
```

## API Endpoints

- `POST /api/tasks` - Create a new task
- `GET /api/tasks/:id` - Get a task by ID
- `GET /api/tasks` - Get all tasks
- `PUT /api/tasks/:id` - Update a task
- `DELETE /api/tasks/:id` - Delete a task

## Example Usage

Create a new task:
```bash
curl -X POST http://localhost:3000/api/tasks \
  -H "Content-Type: application/json" \
  -d '{"title": "Learn Clean Architecture", "description": "Study and implement Clean Architecture principles"}'
```

Get all tasks:
```bash
curl http://localhost:3000/api/tasks
```

## Architecture Overview

This example follows Clean Architecture principles:

1. **Domain Layer**: Contains enterprise business rules
   - Entities: Core business objects
   - Interfaces: Repository contracts

2. **Application Layer**: Contains application business rules
   - Use Cases: Implementation of business operations
   - Orchestrates the flow of data to and from entities

3. **Infrastructure Layer**: Contains frameworks and tools
   - Controllers: Handle HTTP requests
   - Database: MongoDB implementation
   - Routes: API endpoint definitions

The architecture ensures:
- Independence of frameworks
- Testability
- Independence of UI
- Independence of database
- Independence of any external agency 