var mongo = require('mongodb')
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/Dyn4casie";

MongoClient.connect(url, { useUnifiedTopology: true }, function(err, db) {
    if (err) throw err;
    console.log("Database created by Dyn4casie!");
    db.close();
});