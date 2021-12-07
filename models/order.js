var mongoose = require('mongoose');
var Schema = mongoose.Schema;

class Cart {
    set info(info) {
        var tokens = info.split(' ');
        this.user = tokens[0];
        this.cart = tokens[1];
        this.address = tokens[2];
        this.name = tokens[3];
    }
}

var schema = new Schema({
    user: {type: Schema.Types.ObjectId, ref: 'User'},
    cart: {type: Object, required: true},
    address: {type: String, required: true},
    name: {type: String, required: true}
});

schema.loadClass(Cart);
module.exports = mongoose.model('Order', schema);