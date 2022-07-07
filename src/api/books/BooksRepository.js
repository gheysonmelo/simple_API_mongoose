const model = require("./BooksModel");

exports.getAll = function () {
    return model.find();
};

exports.create = function (obj) {
    return model.create(obj);
};

exports.update = function (id, obj) {
    return model.updateOne(obj, {
        where: {
            _id: id 
        }
    });
};

exports.delete = function (id) {
    return model.deleteOne({
        where: {
            _id: id 
        }
    });
};