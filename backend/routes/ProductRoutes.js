const express = require('express');
const router = express.Router();

const ProductController = require('../controllers/ProductController');

router.get('/', ProductController.allProducts);

router.get('/:id', ProductController.aProduct);

module.exports = router;

