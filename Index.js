let mongo = require("mongodb");

let MongoClient = mongo.MongoClient;

let interns = require("./interns");
let findInterns = require("./findInterns");
let updateInterns = require("./updateInterns");

let internDb = "myMovies";

let url = "mongodb://localhost:27017/";

MongoClient.connect(url, { useUnifiedTopology: true }, (error, db) => {
    assert.equal(null, error);
    if (error) throw error;

    let database = db.db("internDb");
    interns(database, () => {
        db.close();
    });

})