var mongoose = require('mongoose');
var Schema = mongoose.Schema;

class Item {
    set type(type) {
        var tokens = type.split(' ');
        this.imagePath = tokens[0];
        this.title = tokens[1];
        this.description = tokens[2];
        this.price = tokens[3];
    }
}

var schema = new Schema({
    imagePath: String,
    title: String,
    description: String,
    price: Number
});

schema.loadClass(Item);
module.exports = mongoose.model('Product', schema);