let mongo = require("mongodb");

let MongoClient = mongo.MongoClient;
let url = "mongodb://localhost:27017/";

MongoClient.connect(url, { useUnifiedTopology: true }, (error, db) => {
    if (error) throw error;

    let interndb = db.db("internDb");
    interndb.createCollection("interns", (error, response) => {

        if (error) throw error;

        console.log("Interns collection created");
        db.close();
    })

})