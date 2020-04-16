const assert = require('assert');

const updateInterns = function(db, callback) {
    const myQuery = { movie: "The Banker" };
    const newValues = { $set: { movie: "No Budget", year: 2020, rating: '9' } };
    // const myQuery = { movie: "No Budget" };
    // const newValues = { $set: { movie: "The Banker", year: 2020, rating: '5' } };
    const collection = db.collection('myMovies');
    collection.updateOne(myQuery, newValues, function(err, res) {
        assert.equal(err, null);
        if (res.result.nModified === 1) {
            console.log('\n\n Collection Updated !!! ')
                // Prints out the newly updated collection
            collection.find({}).toArray(function(err, docs) {
                assert.equal(err, null);
                console.log(`\n The Newly Updated Collection is as follows:`);
                console.log(docs);
                callback(docs);
            });
        }
    });
}

module.exports = updateInterns;