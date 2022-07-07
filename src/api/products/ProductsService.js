const repository = require("./ProductsRepository");

exports.getAll = function () {
    return repository.getAll();
}; 

exports.create = function (obj) {
    return repository.create(obj);
};

exports.update = function (id, obj) {
    return repository.update(id, obj);
};

exports.delete = function (id) {
    return repository.delete(id);
};