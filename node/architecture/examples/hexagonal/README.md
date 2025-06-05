# 🐝 Arquitectura Hexagonal

Este ejemplo implementa la Arquitectura Hexagonal (también conocida como Ports and Adapters) propuesta por Alistair Cockburn. El caso de uso es un sistema de gestión de productos.

## 📁 Estructura del Proyecto

```
src/
├── domain/           # Lógica de negocio central
│   ├── entities/     # Entidades de dominio
│   └── ports/        # Puertos (interfaces)
├── application/      # Casos de uso
│   └── services/     # Servicios de aplicación
└── adapters/         # Adaptadores
    ├── primary/      # Adaptadores primarios (drivers)
    │   └── rest/     # API REST
    └── secondary/    # Adaptadores secundarios (driven)
        └── database/ # Persistencia
```

## 🚀 Características

- Implementación de Arquitectura Hexagonal
- API REST con Express
- Persistencia con MongoDB
- Gestión de productos (CRUD)

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

- `POST /api/products` - Crear un nuevo producto
- `GET /api/products/:id` - Obtener un producto por ID
- `GET /api/products` - Obtener todos los productos
- `PUT /api/products/:id` - Actualizar un producto
- `DELETE /api/products/:id` - Eliminar un producto

## 🏗️ Descripción de la Arquitectura

La Arquitectura Hexagonal divide la aplicación en tres capas principales:

1. **Dominio** (`domain/`):
   - Contiene la lógica de negocio central
   - Define entidades y puertos
   - Es independiente de frameworks

2. **Aplicación** (`application/`):
   - Implementa casos de uso
   - Orquesta el flujo de datos
   - Usa puertos para comunicación

3. **Adaptadores** (`adapters/`):
   - **Primarios** (`primary/`): Manejan peticiones externas
   - **Secundarios** (`secondary/`): Implementan persistencia

## 💡 Ejemplo de Flujo

```javascript
// 1. Petición HTTP llega al adaptador primario (REST)
// 2. El adaptador convierte la petición y llama al puerto
// 3. El caso de uso procesa la lógica de negocio
// 4. El caso de uso usa el puerto para persistencia
// 5. El adaptador secundario (MongoDB) implementa la persistencia
// 6. La respuesta fluye de vuelta a través de las capas
```

## 🎯 Ventajas de la Arquitectura

- **Independencia de Frameworks**
  - El dominio es puro
  - Fácil de testear
  - Fácil de mantener

- **Adaptabilidad**
  - Fácil cambiar frameworks
  - Fácil cambiar bases de datos
  - Fácil agregar nuevas interfaces

- **Testabilidad**
  - Dominio aislado
  - Fácil mockear adaptadores
  - Tests unitarios claros

## 📝 Notas de Implementación

- Los puertos definen contratos
- Los adaptadores implementan puertos
- El dominio no conoce adaptadores
- La aplicación orquesta el flujo
- Los adaptadores son intercambiables 