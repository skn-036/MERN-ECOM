const connectDB = require('../config/db');
const ProductSeeder = require('./ProductSeeder');

connectDB();

ProductSeeder();