const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mongodb = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;
const { MongoClient } = require('mongodb');

const MONGO_URL = 'mongodb://localhost:27017/cupcakes';

const app = express();
const jsonParser = bodyParser.json();

app.use(express.static('public'));

let db = null;

// convert to a file
const menu = {
    "red velvet"    : 3.25,
    "chocolate"     : 3.50,
    "vanilla"       : 3.00,
    "butter"        : 3.75,
    "almond coco loco": 4.00
};


async function startDbAndServer() {
    
    await MongoClient.connect(MONGO_URL, function (err, client) {
        if (err) throw err;
        db = client.db('cupcakes');
    });
    app.listen(3000);
    console.log('Listening on port 3000');

    // check if receipt collection exists. If yes, drop.

};

startDbAndServer();


async function onSaveOrder(req, res) {

    const flavor = req.body.style;

    const newEntry = { style: flavor, message: menu[flavor] };
    const response = await db.collection('receipt').insertOne(newEntry);

    res.json({ cardId: response.insertedId });

}
app.post('/save', jsonParser, onSaveOrder);


async function onGetOrder(req, res) {

    const cardID = req.params.cardId;
    
    const query = { _id: ObjectID(cardID) };
    const response = await db.collection('receipt').findOne(query);
    // console.log(response);

    // get all elements from collection and display the total

    res.send(response);
}
app.get('/get/:cardId', onGetOrder);

async function onGetOrderView(req, res) {
  res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
}
app.get('*', onGetOrderView);
