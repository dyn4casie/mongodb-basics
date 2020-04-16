const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const interns = require('./interns');
const findInterns = require('./findInterns');
const updateInterns = require('./updateInterns');

//Connection URL
const url = 'mongodb://localhost:27017';
//Database Name
const dbName = 'abitechcoder';
//Create a new MongoClient
const client = new MongoClient(url, { useUnifiedTopology: true, useNewUrlParser: true });

// Use connect method to connect to the Server
client.connect(function(err) {
    assert.equal(null, err);
    console.log('Connected Successfully to the Server');
    const db = client.db(dbName);
    if (db.collection('myMovies')) {
        // Drop the collection myMovies to avoid duplicate entries 
        db.collection('myMovies').drop();
    }
    interns(db, function() {
        findInterns(db, function() {
            updateInterns(db, function() {
                client.close();
            });
        });
    });
});