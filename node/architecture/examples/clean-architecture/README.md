# 🧹 Clean Architecture

Este ejemplo implementa Clean Architecture (también conocida como Onion Architecture) propuesta por Robert C. Martin (Uncle Bob). El caso de uso es un sistema de gestión de tareas (Todo List).

## 📁 Estructura del Proyecto

```
src/
├── domain/           # Reglas de negocio empresariales
│   ├── entities/     # Objetos de negocio
│   └── interfaces/   # Interfaces de repositorios
├── application/      # Reglas de negocio de la aplicación
│   └── use-cases/    # Implementación de casos de uso
└── infrastructure/   # Frameworks y drivers
    ├── controllers/  # Controladores Express
    ├── database/     # Implementación MongoDB
    └── routes/       # Rutas Express
```

## 🚀 Características

- Implementación de Clean Architecture
- Integración con MongoDB
- API REST con Express.js
- Gestión de tareas (operaciones CRUD)

## 📋 Prerrequisitos

- Node.js (v14 o superior)
- MongoDB (ejecutándose localmente en el puerto 27017)

## 🛠️ Instalación

1. Instalar dependencias:
```bash
npm install
```

2. Asegúrate de que MongoDB esté ejecutándose en tu máquina local

3. Iniciar la aplicación:
```bash
npm start
```

Para desarrollo con recarga automática:
```bash
npm run dev
```

## 🔌 Endpoints de la API

- `POST /api/tasks` - Crear una nueva tarea
- `GET /api/tasks/:id` - Obtener una tarea por ID
- `GET /api/tasks` - Obtener todas las tareas
- `PUT /api/tasks/:id` - Actualizar una tarea
- `DELETE /api/tasks/:id` - Eliminar una tarea

## 📝 Ejemplo de Uso

Crear una nueva tarea:
```bash
curl -X POST http://localhost:3000/api/tasks \
  -H "Content-Type: application/json" \
  -d '{"title": "Aprender Clean Architecture", "description": "Estudiar e implementar principios de Clean Architecture"}'
```

Obtener todas las tareas:
```bash
curl http://localhost:3000/api/tasks
```

## 🏗️ Descripción de la Arquitectura

Este ejemplo sigue los principios de Clean Architecture:

1. **Capa de Dominio**: Contiene las reglas de negocio empresariales
   - Entidades: Objetos de negocio principales
   - Interfaces: Contratos de repositorios

2. **Capa de Aplicación**: Contiene las reglas de negocio de la aplicación
   - Casos de Uso: Implementación de operaciones de negocio
   - Orquesta el flujo de datos hacia y desde las entidades

3. **Capa de Infraestructura**: Contiene frameworks y herramientas
   - Controladores: Manejan peticiones HTTP
   - Base de Datos: Implementación de MongoDB
   - Rutas: Definiciones de endpoints de la API

La arquitectura asegura:
- Independencia de frameworks
- Testabilidad
- Independencia de la UI
- Independencia de la base de datos
- Independencia de cualquier agencia externa 