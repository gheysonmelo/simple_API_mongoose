const express = require('express');

const service = require("./BooksService");

const router = express.Router();

router.get("/", (req, res) => {
    service.getAll().then((books) => {
        res.send(books);
    })
});

router.post('/', (req, res) => {
    service.create(req.body);
    res.send('livro foi criado');
});

router.put("/:id", (req, res) => {
    service.update(req.params.id, req.body);
    res.send('Estou alterando um livro!');
});

router.delete("/:id", (req, res) => {
    service.delete(req.params.id);
    res.send('Estou excluindo um livro!');
});

module.exports = router;