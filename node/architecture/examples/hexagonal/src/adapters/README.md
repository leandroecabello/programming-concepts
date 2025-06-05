# 🔌 Capa de Adaptadores

La capa de adaptadores contiene todas las implementaciones concretas que permiten que la aplicación interactúe con el mundo exterior. Se divide en adaptadores primarios (drivers) y secundarios (driven).

## 📦 Componentes

### Adaptadores Primarios (`primary/`)
Los adaptadores primarios son los que inician la comunicación con la aplicación. En nuestro caso, implementamos un adaptador REST.

#### REST (`rest/`)
```javascript
class ProductController {
    constructor(productService) {
        this.productService = productService;
    }

    async createProduct(req, res) {
        try {
            const { name, description, price, stock } = req.body;
            const product = await this.productService.createProduct(
                name,
                description,
                price,
                stock
            );
            res.status(201).json(product);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
}
```

### Adaptadores Secundarios (`secondary/`)
Los adaptadores secundarios son los que la aplicación usa para comunicarse con servicios externos. En nuestro caso, implementamos un adaptador para MongoDB.

#### Base de Datos (`database/`)
```javascript
class MongoProductRepository extends ProductRepository {
    async save(product) {
        const productDoc = new ProductModel({
            name: product.name,
            description: product.description,
            price: product.price,
            stock: product.stock
        });
        const savedProduct = await productDoc.save();
        return new Product(/* ... */);
    }
}
```

## 🔑 Características Principales

1. **Adaptadores Primarios**
   - Manejan peticiones externas
   - Convierten datos de entrada
   - Llaman a los servicios
   - Formatean respuestas

2. **Adaptadores Secundarios**
   - Implementan puertos del dominio
   - Manejan detalles técnicos
   - Convierten datos de salida
   - Gestionan conexiones externas

3. **Independencia**
   - Cada adaptador es independiente
   - Fácil de reemplazar
   - Fácil de testear
   - Fácil de mantener

## 💡 Ejemplo de Flujo

```javascript
// 1. Petición HTTP llega al adaptador primario (REST)
// 2. El controlador convierte la petición
const { name, description, price, stock } = req.body;

// 3. Llama al servicio
const product = await productService.createProduct(
    name,
    description,
    price,
    stock
);

// 4. El servicio usa el adaptador secundario (MongoDB)
// 5. El adaptador secundario persiste los datos
// 6. La respuesta fluye de vuelta a través de las capas
```

## 🎯 Responsabilidades

- Implementar interfaces del dominio
- Manejar frameworks externos
- Convertir datos entre capas
- Gestionar conexiones externas
- Adaptar tecnologías específicas

## 📝 Notas Importantes

- Los adaptadores son intercambiables
- Los adaptadores primarios inician la comunicación
- Los adaptadores secundarios responden a la aplicación
- Los adaptadores manejan detalles técnicos
- Los adaptadores no contienen lógica de negocio 