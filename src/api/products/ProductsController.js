const express = require('express');

const service = require("./ProductsService");

const router = express.Router();

router.get("/", (req, res) => {
    service.getAll().then((products) => {
        res.send(products);
    })
});

router.post('/', (req, res) => {
    service.create(req.body);
    res.send('Produto foi criado');
});

router.put("/:id", (req, res) => {
    service.update(req.params.id, req.body);
    res.send('Estou alterando um produto!');
});

router.delete("/:id", (req, res) => {
    service.delete(req.params.id);
    res.send('Estou excluindo um produto!');
});

module.exports = router;