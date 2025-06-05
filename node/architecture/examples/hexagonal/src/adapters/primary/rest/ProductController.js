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

    async getProduct(req, res) {
        try {
            const { id } = req.params;
            const product = await this.productService.getProduct(id);
            if (!product) {
                return res.status(404).json({ error: 'Producto no encontrado' });
            }
            res.json(product);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    async getAllProducts(req, res) {
        try {
            const products = await this.productService.getAllProducts();
            res.json(products);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    async updateProduct(req, res) {
        try {
            const { id } = req.params;
            const { name, description, price, stock } = req.body;
            const product = await this.productService.updateProduct(
                id,
                name,
                description,
                price,
                stock
            );
            if (!product) {
                return res.status(404).json({ error: 'Producto no encontrado' });
            }
            res.json(product);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    async deleteProduct(req, res) {
        try {
            const { id } = req.params;
            const success = await this.productService.deleteProduct(id);
            if (!success) {
                return res.status(404).json({ error: 'Producto no encontrado' });
            }
            res.status(204).send();
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    async updateStock(req, res) {
        try {
            const { id } = req.params;
            const { quantity } = req.body;
            const product = await this.productService.updateStock(id, quantity);
            if (!product) {
                return res.status(404).json({ error: 'Producto no encontrado' });
            }
            res.json(product);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
}

module.exports = ProductController; 