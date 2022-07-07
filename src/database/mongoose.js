const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/exemplo');

module.exports = mongoose;