const assert = require("assert");
const createInterns = function(db, callback) {
    const collection = db.collection("myMovies");
    //insert movies
    collection.insertMany([
        { movie: "The Banker", year: "2020", rating: 8 },
        { movie: "Bad Boys", year: "2020", rating: 7 },
        { movie: "The Hunt", year: "2020", rating: 7 },
        { movie: "Bloodshot", year: "2020", rating: 7.5 },
        { movie: "First Cow", year: "2020", rating: 6.5 },
    ], (err, result) => {
        assert.equal(err, null);
        assert.equal(5, result.result.n);
        assert.equal(5, result.ops.length);
        console.log(result);
        callback(result);
    });
};

module.exports = createInterns;