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
        imagePath: 'https://www.pngall.com/wp-content/uploads/5/Yummy-Cupcake-PNG-Picture.png',
        title: 'Fun in the Sun',
        description: 'Tangy lemon cake with strawberry lemonade frosting. Now this is a party!',
        price: 3.25
    }),
    new Product({
        imagePath: 'https://r1.hiclipart.com/path/884/542/353/97e13r60numghp0d44s8o5v7nf-00ac2da49e4a9bedaa31b37008abc192.png?dl=1',
        title: 'London Mudd',
        description: 'Dark chocolate cake with a luscious earl grey frosting. Jolly good!',
        price: 3.75
    }),
    new Product({
        imagePath: 'https://www.pngall.com/wp-content/uploads/5/Yummy-Cupcake-PNG.png',
        title: 'Not-So-Plain Vanilla',
        description: 'Moist vanilla cake topped with vanilla bourbon frosting. Anything but plain!',
        price: 3.25
    }),
    new Product({
        imagePath: 'https://www.pngkit.com/png/full/427-4273444_delicious-strawberry-cupcakes-cupcake-with-strawberry-png.png',
        title: 'Strawberry Not-So-Shortcake',
        description: 'A shortcake base with a tall helping of strawberry sweet cream frosting.',
        price: 4.00
    }),
    new Product({
        imagePath: 'https://www.pngall.com/wp-content/uploads/5/Cupcake-Dessert-PNG-Free-Image.png',
        title: 'Magical Unicorn',
        description: 'Rainbow vanilla cake with colorful vanilla frosting. Great for children’s birthday parties.',
        price: 3.25
    }),
    new Product({
        imagePath: 'https://www.pngall.com/wp-content/uploads/5/Cupcake-PNG-Clipart.png',
        title: 'Rocky Road Redemption',
        description: 'Epic chocolate cake, milk chocolate frosting, covered in toasted peanuts, marshmallows, and chocolate fudge. ',
        price: 4.00
    }),
    new Product({
        imagePath: 'https://www.pngall.com/wp-content/uploads/5/Cupcake-PNG-Image-File.png',
        title: 'Drink the Koolaid',
        description: 'Vanilla cake with a blue raspberry Koolaid frosting. Oh-Yeah!',
        price: 3.75
    }),
    new Product({
        imagePath: 'https://www.pngmart.com/files/5/Cupcake-PNG-Photos.png',
        title: 'Peanut Butter Cup-Cake',
        description: 'Creamy peanut butter frosting with milk chocolate cake. Name a more iconic duo.',
        price: 3.75
    }),
    new Product({
        imagePath: 'https://purepng.com/public/uploads/large/chocolate-flower-cupcake-hzo.png',
        title: 'Devil’s in the Cupcake',
        description: 'Devil’s food cake with tempting fudge frosting. Wicked smart!',
        price: 3.00
    }),
    new Product({
        imagePath: 'https://www.pikpng.com/pngl/b/58-581627_cupcake-transparent-background-cupcake-png-clipart.png',
        title: 'He Loves Me, He Loves Me Not – Oh, Cupcake!',
        description: 'Strawberry frosting, decadent chocolate cake, chocolate sprinkles, and romantic thoughts.',
        price: 3.75
    }),
    new Product({
        imagePath: 'https://p7.hiclipart.com/preview/308/4/971/cupcake-frosting-icing-dessert-candy-vanilla.jpg',
        title: 'Pretty in Pink',
        description: 'Pink velvet cake with smooth cream cheese frosting. A perfect pink pleasure!',
        price: 4.00
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