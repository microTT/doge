/**
 * Created by micro0 on 08/03/2017.
 */
let MongoClient = require('mongodb').MongoClient,
    assert = require('assert');

let url = "mongodb://localhost:27017/doge";

MongoClient.connect(url, function (err, db) {
    // console.log(err);
    // let collection = db.collection('documents');
    // console.log(collection);
    //
    // collection.insertMany([{
    //     a: '1'
    // }, {
    //     a: '2'
    // }], function (err, result) {
    //     console.log(err);
    //     console.log(result);
    // });
    //
    // db.close();
});


class PostsReadService {

    * read() {
        // console.log('callRead');
        // return [1, 2, 3];
    }

}

module.exports = new PostsReadService();
