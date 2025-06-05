# 🎮 Capa de Aplicación

La capa de aplicación contiene la lógica de negocio específica de la aplicación. Actúa como un orquestador entre el dominio y la infraestructura.

## 📦 Componentes

### Casos de Uso (`use-cases/`)
Los casos de uso implementan las operaciones específicas que puede realizar la aplicación. Cada caso de uso:
- Recibe datos de entrada
- Aplica reglas de negocio
- Interactúa con el repositorio
- Devuelve resultados

Ejemplo de un caso de uso:
```javascript
class CreateTaskUseCase {
    constructor(taskRepository) {
        this.taskRepository = taskRepository;
    }

    async execute(title, description) {
        const task = new Task(
            uuid(),
            title,
            description,
            false,
            new Date()
        );
        return await this.taskRepository.create(task);
    }
}
```

## 🔑 Características Principales

1. **Orquestación**
   - Coordina el flujo de datos
   - Aplica reglas de negocio
   - Maneja la lógica de aplicación

2. **Independencia de Frameworks**
   - No depende de frameworks específicos
   - Puede ser reutilizada en diferentes contextos
   - Fácil de testear

3. **Caso de Uso por Operación**
   - Cada operación tiene su propio caso de uso
   - Responsabilidad única
   - Fácil de mantener

## 💡 Ejemplo de Flujo

```javascript
// 1. El controlador recibe la petición
// 2. Crea el caso de uso con el repositorio
const createTaskUseCase = new CreateTaskUseCase(taskRepository);

// 3. Ejecuta el caso de uso
const task = await createTaskUseCase.execute(
    "Implementar Clean Architecture",
    "Crear ejemplo práctico"
);

// 4. Devuelve el resultado
return task;
```

## 🎯 Responsabilidades

- Implementar casos de uso
- Aplicar reglas de negocio
- Coordinar operaciones
- Manejar la lógica de aplicación
- Orquestar el flujo de datos

## 📝 Notas Importantes

- Los casos de uso son independientes
- Cada caso de uso tiene una única responsabilidad
- La lógica de negocio debe estar en el dominio
- Los casos de uso solo orquestan las operaciones 