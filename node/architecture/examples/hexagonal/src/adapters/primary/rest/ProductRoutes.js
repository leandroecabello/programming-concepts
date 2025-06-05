const express = require('express');
const ProductController = require('./ProductController');

function createProductRoutes(productService) {
    const router = express.Router();
    const productController = new ProductController(productService);

    router.post('/', (req, res) => productController.createProduct(req, res));
    router.get('/:id', (req, res) => productController.getProduct(req, res));
    router.get('/', (req, res) => productController.getAllProducts(req, res));
    router.put('/:id', (req, res) => productController.updateProduct(req, res));
    router.delete('/:id', (req, res) => productController.deleteProduct(req, res));
    router.patch('/:id/stock', (req, res) => productController.updateStock(req, res));

    return router;
}

module.exports = createProductRoutes; 