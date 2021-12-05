var express = require('express');
const { countDocuments } = require('../models/product');
var router = express.Router();
var Cart = require('../models/cart');

var Product = require('../models/product');

/* GET home page. */
router.get('/', function(req, res, next) {
  Product.find(function(err, docs) {
    res.render('shop/index', { title: 'Cutesy', products: docs });
  });
});

/* route to add to the cart */
router.get('/add-to-cart/:id', function(req, res, next) {
  var productId = req.params.id;
  var cart = new Cart(req.session.cart ? req.session.cart : {});

  Product.findById(productId, function(err, product) {
    if (err) {
      return res.redirect('/');
    }
    cart.add(product, product.id);
    req.session.cart = cart;
    console.log(req.session.cart);
    res.redirect('/');
  });
});

/* route to the shopping cart checkout */
router.get('/shopping-cart', function(req, res, next) {
  if (!req.session.cart) {
    return res.render('shop/cart', {products: null});
  }
  var cart = new Cart(req.session.cart);
  res.render('shop/cart', {products: cart.generateArray(), totalPrice: cart.totalPrice});
});

module.exports = router;
