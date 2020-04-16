const assert = require("assert");

const findInterns = function(db, callback) {
    //document collection
    const collection = db.collection("myMovies");
    //first document in the collection
    collection.findOne({}, function(err, doc) {
        assert.equal(err, null);
        console.log('\n first document in the collection:')
        console.log(doc);
    });

    //b) find all movies with a rating of 7
    collection.find({ "rating": 7 }).toArray(function(err, docs) {
        assert.equal(err, null);
        console.log('\n All movies with rating of 7:');
        console.log(docs);
        callback(docs);
    });

    //c) use a projection object to return only movie titles and nothing else
    collection.find({}, { projection: { _id: 0, movie: 1 } }).toArray(function(err, docs) {
        assert.equal(err, null);
        console.log(`\n Found all movies title in the collection:`);
        console.log(docs);
        callback(docs);
    });
}

module.exports = findInterns;