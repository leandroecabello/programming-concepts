const mongoose = require('mongoose');
const Product = require('../../../domain/entities/Product');
const ProductRepository = require('../../../domain/ports/ProductRepository');

// Schema de MongoDB
const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, default: '' },
    price: { type: Number, required: true },
    stock: { type: Number, default: 0 }
});

const ProductModel = mongoose.model('Product', productSchema);

class MongoProductRepository extends ProductRepository {
    async save(product) {
        const productDoc = new ProductModel({
            name: product.name,
            description: product.description,
            price: product.price,
            stock: product.stock
        });

        const savedProduct = await productDoc.save();
        return new Product(
            savedProduct._id.toString(),
            savedProduct.name,
            savedProduct.description,
            savedProduct.price,
            savedProduct.stock
        );
    }

    async findById(id) {
        const productDoc = await ProductModel.findById(id);
        if (!productDoc) return null;

        return new Product(
            productDoc._id.toString(),
            productDoc.name,
            productDoc.description,
            productDoc.price,
            productDoc.stock
        );
    }

    async findAll() {
        const productDocs = await ProductModel.find();
        return productDocs.map(doc => new Product(
            doc._id.toString(),
            doc.name,
            doc.description,
            doc.price,
            doc.stock
        ));
    }

    async update(id, product) {
        const updatedProduct = await ProductModel.findByIdAndUpdate(
            id,
            {
                name: product.name,
                description: product.description,
                price: product.price,
                stock: product.stock
            },
            { new: true }
        );

        if (!updatedProduct) return null;

        return new Product(
            updatedProduct._id.toString(),
            updatedProduct.name,
            updatedProduct.description,
            updatedProduct.price,
            updatedProduct.stock
        );
    }

    async delete(id) {
        const result = await ProductModel.findByIdAndDelete(id);
        return result !== null;
    }
}

module.exports = MongoProductRepository; 