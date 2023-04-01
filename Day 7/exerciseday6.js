class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}
class Transaction extends Product {
    constructor (name, price, qty) {
        this.total = total;
        super(name, price);
        this.Qty = qty
    }
    totaltrans (price, qty) {
        total = price * qty;
    }
}
const product1 = new Product ("pill biru", 5000);
const product2 = new Product ("pill merah", 3000);
const product3 = new Product ("pill kuning", 6000);
