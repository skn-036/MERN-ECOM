const Product = require('../models/Product');

const allProducts = async (req, res) => {
    try {
        const products = await Product.find({});
        res.json(products);
    } catch (error) {
        console.log(error)
        res.status(500).json({message : 'Server error !!! All products fetching failed'});
    }   
}

const aProduct = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        res.json(product);
    } catch (error) {
        console.error(error)
        res.status(500).json({message : '404 Not Found'});
    }   
}

module.exports = {
    allProducts, aProduct, 
}