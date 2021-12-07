var Product = require('../models/product');

var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/cupcakes');

var products = [
    new Product({
        imagePath: 'https://sweetfreedombakeshop.com/wp-content/uploads/IMG_2845.jpg',
        title: 'Red Velvet',
        description: 'Moist cocoa-y cake with a luscious cream cheese frosting.',
        price: 3.25
    }),
    new Product({
        imagePath: 'https://sweetfreedombakeshop.com/wp-content/uploads/Dreamsicle-Cupcake.png',
        title: 'Fun in the Sun',
        description: 'Tangy orange cake with mimosa frosting. Now this is a party!',
        price: 3.25
    }),
    new Product({
        imagePath: 'https://sweetfreedombakeshop.com/wp-content/uploads/Lavender-Earl-Gray-Cupcake.png',
        title: 'London Smog',
        description: 'Lavender earl grey cake with a luscious earl grey frosting. Jolly good!',
        price: 3.75
    }),
    new Product({
        imagePath: 'https://sweetfreedombakeshop.com/wp-content/uploads/White-Velvet-Cupcake.jpg',
        title: 'Not-So-Plain Vanilla',
        description: 'Moist vanilla cake topped with vanilla bourbon frosting. Anything but plain!',
        price: 3.25
    }),
    new Product({
        imagePath: 'https://sweetfreedombakeshop.com/wp-content/uploads/Strawberry-Lemonade-Cupcake.jpg',
        title: 'Strawberry Not-So-Shortcake',
        description: 'A shortcake base with a tall helping of strawberry sweet cream frosting.',
        price: 4.00
    }),
    new Product({
        imagePath: 'https://sweetfreedombakeshop.com/wp-content/uploads/IMG_2281-copy.jpg',
        title: 'Snickerdoo-You-Want-Some',
        description: 'Snickerdoodle cake with delectable cinnamon frosting. Yes I do want some!',
        price: 3.25
    }),
    new Product({
        imagePath: 'https://sweetfreedombakeshop.com/wp-content/uploads/IMG_2977-1.jpg',
        title: 'Peanut Butter Cup-Cake',
        description: 'Creamy peanut butter frosting with milk chocolate cake. Name a more iconic duo.',
        price: 3.75
    }),
    new Product({
        imagePath: 'https://sweetfreedombakeshop.com/wp-content/uploads/IMG_2438.jpg',
        title: 'Devil’s in the Cupcake',
        description: 'Devil’s food cake with tempting fudge frosting. Wicked smart!',
        price: 3.00
    }),
    new Product({
        imagePath: 'https://sweetfreedombakeshop.com/wp-content/uploads/IMG_3397.jpg',
        title: 'He Loves Me, He Loves Me Not',
        description: 'Strawberry frosting, decadent chocolate cake, and romantic thoughts.',
        price: 3.75
    }),
    new Product({
        imagePath: 'https://sweetfreedombakeshop.com/wp-content/uploads/Pink-Champagne-Cupcake.jpg',
        title: 'Pretty in Pink',
        description: 'Pink velvet cake with smooth cream cheese frosting. A perfect pink pleasure!',
        price: 4.00
    }),
    new Product({
        imagePath: 'https://sweetfreedombakeshop.com/wp-content/uploads/Thin-Mint-Cupcake.jpg',
        title: 'Chocolate Mint Madness',
        description: 'Rich chocolate cake with crisp mint frosting. Perfect for St. Patrick’s Day!',
        price: 3.25
    }),
    new Product({
        imagePath: 'https://sweetfreedombakeshop.com/wp-content/uploads/Funfetti-Cupcake-Natural.png',
        title: 'Finest Funfetti',
        description: 'Vanilla cake and vanilla frosting bursting with colorful jimmies.',
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