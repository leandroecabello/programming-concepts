# 🎯 Capa de Dominio

La capa de dominio es el corazón de la aplicación y contiene las reglas de negocio fundamentales. Es la capa más interna y no depende de ninguna otra capa.

## 📦 Componentes

### Entidades (`entities/`)
Las entidades son los objetos de negocio principales. En nuestro caso, tenemos la entidad `Task` que representa una tarea en el sistema.

```javascript
class Task {
    constructor(id, title, description, completed, createdAt) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.completed = completed;
        this.createdAt = createdAt;
    }
}
```

### Interfaces (`interfaces/`)
Las interfaces definen contratos que deben ser implementados por las capas externas. Por ejemplo, `ITaskRepository` define los métodos que cualquier implementación de repositorio debe proporcionar:

```javascript
class ITaskRepository {
    async create(task) {}
    async findById(id) {}
    async findAll() {}
    async update(id, task) {}
    async delete(id) {}
}
```

## 🔑 Características Principales

1. **Independencia Total**
   - No depende de frameworks
   - No depende de bases de datos
   - No depende de la UI
   - No depende de ninguna capa externa

2. **Reglas de Negocio Puras**
   - Contiene solo lógica de negocio
   - No tiene conocimiento de la infraestructura
   - No tiene dependencias externas

3. **Entidades Inmutables**
   - Las entidades son objetos de valor
   - No tienen comportamiento complejo
   - Son fáciles de testear

## 💡 Ejemplo de Uso

```javascript
// Crear una nueva tarea
const task = new Task(
    '1',
    'Implementar Clean Architecture',
    'Crear ejemplo práctico',
    false,
    new Date()
);
```

## 🎯 Responsabilidades

- Definir entidades de negocio
- Definir reglas de negocio
- Definir interfaces para repositorios
- Mantener la lógica de negocio pura
- Ser el centro de la arquitectura 