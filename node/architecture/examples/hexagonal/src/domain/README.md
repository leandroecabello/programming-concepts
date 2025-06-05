# 🎯 Capa de Dominio

La capa de dominio es el corazón de la aplicación y contiene las reglas de negocio fundamentales. En la Arquitectura Hexagonal, el dominio es el hexágono central y no depende de ninguna otra capa.

## 📦 Componentes

### Entidades (`entities/`)
Las entidades son los objetos de negocio principales. En nuestro caso, tenemos la entidad `Product` que representa un producto en el sistema.

```javascript
class Product {
    constructor(id, name, description, price, stock) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.price = price;
        this.stock = stock;
    }

    // Métodos de dominio
    hasStock() {
        return this.stock > 0;
    }

    updateStock(quantity) {
        if (this.stock + quantity < 0) {
            throw new Error('No hay suficiente stock');
        }
        this.stock += quantity;
    }
}
```

### Puertos (`ports/`)
Los puertos son interfaces que definen cómo el dominio se comunica con el mundo exterior. Por ejemplo, `ProductRepository` define los métodos que cualquier implementación de repositorio debe proporcionar:

```javascript
class ProductRepository {
    async save(product) {}
    async findById(id) {}
    async findAll() {}
    async update(id, product) {}
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

3. **Entidades con Comportamiento**
   - Las entidades encapsulan reglas de negocio
   - Tienen métodos que representan operaciones válidas
   - Validan sus propios estados

## 💡 Ejemplo de Uso

```javascript
// Crear un nuevo producto
const product = new Product(
    '1',
    'Laptop Gaming',
    'Laptop de alta gama',
    999.99,
    10
);

// Usar métodos de dominio
if (product.hasStock()) {
    product.updateStock(-1); // Reducir stock
}
```

## 🎯 Responsabilidades

- Definir entidades de negocio
- Definir reglas de negocio
- Definir puertos (interfaces)
- Mantener la lógica de negocio pura
- Ser el centro del hexágono

## 📝 Notas Importantes

- El dominio es el hexágono central
- Los puertos definen contratos
- Las entidades tienen comportamiento
- No hay dependencias externas
- La lógica de negocio está aislada 