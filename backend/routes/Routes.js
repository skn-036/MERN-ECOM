const express = require('express');
const app = express();

const productRoutes = require('./ProductRoutes');

app.use(express.json());

//product routes
const routes = () => {
    app.use('/api/products', productRoutes);
}

module.exports = routes;

