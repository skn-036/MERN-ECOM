const Product = require('../models/Product');
const ProductsData = require('../data/products');

const importData = async () => {
    try {
        await Product.deleteMany({});
        await Product.insertMany(ProductsData);

        console.log('Products seeding is completed');
        process.exit();

    } catch(error) {
        console.error('Product seeding failed');
        process.exit(1);
    }
}

module.exports = importData;