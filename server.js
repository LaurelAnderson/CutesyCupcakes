const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mongodb = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;
const { MongoClient } = require('mongodb');

const MONGO_URL = 'mongodb://localhost:27016/ecard-db';

const app = express();
const jsonParser = bodyParser.json();

app.use(express.static('public'));

let db = null;

/*
 * Complete the startDbAndServer function, which connects to the MongoDB
 * server and creates a Node web server listening to port 3000.
 */
async function startDbAndServer() {
    // Your code goes here.
    
    await MongoClient.connect(MONGO_URL, function (err, client) {
        if (err) throw err;
        db = client.db('ecard-db');
    });
    app.listen(3000);
    console.log('Listening on port 3000');

};

startDbAndServer();

function addCupcakes() {
    // db.collection('cupcakes').drop();
    db.collection('cupcake').insertMany([
        { flavor: "vanilla", price: 3.00 },
        { flavor: "chocolate", price: 3.25 },
        { flavor: "butter", price: 3.50 }
    ]);
}

////////////////////////////////////////////////////////////////////////////////

/*
 * Complete the onSaveCard function, which takes in an HTTP request 'req'.
 * 'req' is sent when _onFormSubmit in "public/js/creator-view.js" is executed. 
 * The request sends 'const params = {style: this.style, message: this.message}'
 * to the Node server.
 * 
 * After receiving the request, the Node server should save it in the 'card' collection
 * in MongoDB and return the document ID as the 'cardID'. 
 *
 * 'res' is the response which contains a json object. 
 */
async function onSaveCard(req, res) {
    // Your code goes here.

    const style = req.body.style;

    const query = { flavor: String(style) };
    const cupcake = await db.collection('cupcake').findOne(query);
    const message = cupcake.price;

    const newEntry = { style: style, message: message };
    const response = await db.collection('card').insertOne(newEntry);

    res.json({ cardId: response.insertedId });

}
app.post('/save', jsonParser, onSaveCard);

/*
 * Complete the onGetCard function, which takes in an HTTP request 'req'.
 * 'req' is sent when _loadCard() in "public/js/card-view.js" is executed
 * or when a URL (e.g., http://localhost:3000/id/5bbb8a07ebbf6a9cf4d839f5)
 * is entered in your browser. The request sends a cardID to the Node server.
 * The cardID is also a document ID in MongoDB.
 *
 * After receiving the request, the Node server should search the cardID in
 * the 'card' collection and return the content of the stored document matching
 * the cardID to the browser.
 */ 

async function onGetCard(req, res) {
    // Your code goes here

    const cardID = req.params.cardId;
    
    const query = { _id: ObjectID(cardID) };
    const response = await db.collection('card').findOne(query);
    // console.log(response);

    res.send(response);
}
app.get('/get/:cardId', onGetCard);

async function onGetCardView(req, res) {
  res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
  addCupcakes();
}
app.get('*', onGetCardView);
