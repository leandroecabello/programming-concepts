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

    updatePrice(newPrice) {
        if (newPrice < 0) {
            throw new Error('El precio no puede ser negativo');
        }
        this.price = newPrice;
    }
}

module.exports = Product; 