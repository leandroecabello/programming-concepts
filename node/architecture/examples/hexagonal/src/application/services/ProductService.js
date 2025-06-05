const { v4: uuidv4 } = require('uuid');
const Product = require('../../domain/entities/Product');

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

    async getProduct(id) {
        return await this.productRepository.findById(id);
    }

    async getAllProducts() {
        return await this.productRepository.findAll();
    }

    async updateProduct(id, name, description, price, stock) {
        const existingProduct = await this.productRepository.findById(id);
        if (!existingProduct) {
            throw new Error('Producto no encontrado');
        }

        const updatedProduct = new Product(
            id,
            name,
            description,
            price,
            stock
        );

        return await this.productRepository.update(id, updatedProduct);
    }

    async deleteProduct(id) {
        const product = await this.productRepository.findById(id);
        if (!product) {
            throw new Error('Producto no encontrado');
        }

        return await this.productRepository.delete(id);
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

module.exports = ProductService; 