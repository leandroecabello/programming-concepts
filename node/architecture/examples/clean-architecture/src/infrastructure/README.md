# 🏗️ Capa de Infraestructura

La capa de infraestructura es la capa más externa de la aplicación. Contiene todas las implementaciones concretas de frameworks, bases de datos y herramientas externas.

## 📦 Componentes

### Base de Datos (`database/`)
Implementaciones concretas de los repositorios definidos en el dominio.

```javascript
class MongoTaskRepository extends ITaskRepository {
    async create(task) {
        const taskDoc = new TaskModel({
            title: task.title,
            description: task.description,
            completed: task.completed,
            createdAt: task.createdAt
        });
        const savedTask = await taskDoc.save();
        return new Task(/* ... */);
    }
    // ... otros métodos
}
```

### Controladores (`controllers/`)
Manejan las peticiones HTTP y las respuestas.

```javascript
class TaskController {
    constructor(taskRepository) {
        this.createTaskUseCase = new CreateTaskUseCase(taskRepository);
    }

    async createTask(req, res) {
        try {
            const { title, description } = req.body;
            const task = await this.createTaskUseCase.execute(title, description);
            res.status(201).json(task);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
}
```

### Rutas (`routes/`)
Definen los endpoints de la API.

```javascript
function createTaskRoutes(taskRepository) {
    const router = express.Router();
    const taskController = new TaskController(taskRepository);
    router.post('/', (req, res) => taskController.createTask(req, res));
    return router;
}
```

## 🔑 Características Principales

1. **Implementaciones Concretas**
   - Implementa interfaces del dominio
   - Usa frameworks específicos
   - Maneja detalles técnicos

2. **Adaptadores**
   - Adapta frameworks externos
   - Convierte datos entre capas
   - Maneja la comunicación externa

3. **Configuración**
   - Configura servidores
   - Configura bases de datos
   - Maneja conexiones

## 💡 Ejemplo de Flujo

```javascript
// 1. Configuración del servidor
const app = express();
app.use(express.json());

// 2. Conexión a la base de datos
await MongoConnection.connect();

// 3. Creación del repositorio
const taskRepository = new MongoTaskRepository();

// 4. Configuración de rutas
app.use('/api/tasks', createTaskRoutes(taskRepository));
```

## 🎯 Responsabilidades

- Implementar interfaces del dominio
- Manejar frameworks externos
- Configurar la aplicación
- Gestionar conexiones
- Adaptar datos entre capas

## 📝 Notas Importantes

- Es la única capa que conoce frameworks
- Implementa interfaces del dominio
- Maneja detalles técnicos
- Es intercambiable
- No contiene lógica de negocio 