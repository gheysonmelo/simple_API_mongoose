const Mongoose = require('mongoose');
const mongoose = require('../../database/mongoose');

const Book = mongoose.model('books', {});

module.exports = Book;