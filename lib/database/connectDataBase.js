/**
 * Created by micro0 on 09/03/2017.
 */
let MongoClient = require('mongodb').MongoClient,
    assert = require('assert');

let url = "mongodb://localhost:27017/doge";

MongoClient.connect(url, function(err, db) {
    console.log(db);

    db.close();
});