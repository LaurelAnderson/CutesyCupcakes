var Product = require('../models/product');

var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/cupcakes');

var products = [
    new Product({
        imagePath: 'https://cdn.shopify.com/s/files/1/0266/2304/9805/products/RedVelvet_Shopify_1200x1200.png?v=1599664692',
        title: 'Red Velvet',
        description: 'Moist cocoa-y cake with a luscious cream cheese frosting',
        price: 3.25
    }),
    new Product({
        imagePath: 'https://cdn.shopify.com/s/files/1/0266/2304/9805/products/RedVelvet_Shopify_1200x1200.png?v=1599664692',
        title: 'Vanilla',
        description: 'Moist cocoa-y cake with a luscious cream cheese frosting',
        price: 3.25
    }),
    new Product({
        imagePath: 'https://cdn.shopify.com/s/files/1/0266/2304/9805/products/RedVelvet_Shopify_1200x1200.png?v=1599664692',
        title: 'Buttery Biscuit',
        description: 'Moist cocoa-y cake with a luscious cream cheese frosting',
        price: 3.75
    }),
    new Product({
        imagePath: 'https://cdn.shopify.com/s/files/1/0266/2304/9805/products/RedVelvet_Shopify_1200x1200.png?v=1599664692',
        title: 'Chocolate Chipper',
        description: 'Moist cocoa-y cake with a luscious cream cheese frosting',
        price: 4.25
    }),
    new Product({
        imagePath: 'https://cdn.shopify.com/s/files/1/0549/9456/7357/products/Cupcakes_Carrot_FNL_900x.png?v=1619748534',
        title: 'Carrot',
        description: 'Walnut-studded carrot cake with freshly grated carrots and fragrant spices',
        price: 3.75
    }),
    new Product({
        imagePath: 'https://cdn.shopify.com/s/files/1/0549/9456/7357/products/Cupcakes_Carrot_FNL_900x.png?v=1619748534',
        title: 'Carrot',
        description: 'Walnut-studded carrot cake with freshly grated carrots and fragrant spices',
        price: 3.75
    }),
    new Product({
        imagePath: 'https://cdn.shopify.com/s/files/1/0266/2304/9805/products/RedVelvet_Shopify_1200x1200.png?v=1599664692',
        title: 'Red Velvet',
        description: 'Moist cocoa-y cake with a luscious cream cheese frosting',
        price: 3.75
    }),
];

var done = 0;
for (var i = 0; i < products.length; i++) {
    products[i].save(function(err, result) {
        done++;
        if (done === products.length) {
            exit();
        }
    });
}

function exit() {
    mongoose.disconnect();
}