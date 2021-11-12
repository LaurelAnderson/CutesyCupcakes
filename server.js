const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mongodb = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;

const MONGO_URL = 'mongodb://localhost:27017/cupcake-db';

const app = express();
const jsonParser = bodyParser.json();
app.use(express.static('public'));

let db = null;
let collection = null;

async function startDbAndServer() {

    db = await mongodb.connect(MONGO_URL);
    collection = db.collection('cupcakes');

    await app.listen(3000);
    console.log('Listening on port 3000');

};
startDbAndServer();

async function onGetOrderView(req, res) {
  res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
}
app.get('*', onGetOrderView);