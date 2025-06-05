# 🎮 Capa de Aplicación

La capa de aplicación contiene los casos de uso de la aplicación. Actúa como un orquestador entre el dominio y los adaptadores, implementando la lógica de aplicación específica.

## 📦 Componentes

### Servicios (`services/`)
Los servicios implementan los casos de uso de la aplicación. Cada servicio:
- Recibe datos de entrada
- Aplica reglas de negocio
- Interactúa con los puertos
- Devuelve resultados

Ejemplo de un servicio:
```javascript
class ProductService {
    constructor(productRepository) {
        this.productRepository = productRepository;
    }

    async createProduct(name, description, price, stock) {
        const product = new Product(
            uuidv4(),
            name,
            description,
            price,
            stock
        );
        return await this.productRepository.save(product);
    }

    async updateStock(id, quantity) {
        const product = await this.productRepository.findById(id);
        if (!product) {
            throw new Error('Producto no encontrado');
        }
        product.updateStock(quantity);
        return await this.productRepository.update(id, product);
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
// 2. Crea el servicio con el repositorio
const productService = new ProductService(productRepository);

// 3. Ejecuta el caso de uso
const product = await productService.createProduct(
    "Laptop Gaming",
    "Laptop de alta gama",
    999.99,
    10
);

// 4. Devuelve el resultado
return product;
```

## 🎯 Responsabilidades

- Implementar casos de uso
- Aplicar reglas de negocio
- Coordinar operaciones
- Manejar la lógica de aplicación
- Orquestar el flujo de datos

## 📝 Notas Importantes

- Los servicios son independientes
- Cada servicio tiene una única responsabilidad
- La lógica de negocio debe estar en el dominio
- Los servicios solo orquestan las operaciones
- Los servicios usan puertos, no adaptadores 