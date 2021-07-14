require('dotenv').config();
const express = require('express');
const app = express();

//db connection
const connectDB = require('./config/db');
connectDB();

//routing
const productRoutes = require('./routes/ProductRoutes');

app.use(express.json());

//product routes
app.use('/api/products', productRoutes);

const port = process.env.PORT || 5000;
app.listen(port, ()=> console.log(`Server is running on port ${port}`));