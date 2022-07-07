const Mongoose = require('mongoose');
const mongoose = require('../../database/mongoose');

const Product = mongoose.model('products', {}); 

module.exports = Product;