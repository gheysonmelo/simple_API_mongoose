const express = require('express');
const bodyParser = require('body-parser')

const service = require("./src/api/products/ProductsService")

const products = require('./src/api/products/ProductsController');
const books = require('./src/api/books/BooksController');

const app = express();
const port = 4002;

app.use(bodyParser.json());

app.use('/products', products);
app.use('/books', books);

app.get('/', (req, res) => {
    res.send(service.getAll());
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});