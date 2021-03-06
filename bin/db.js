var MongoClient = require('mongodb').MongoClient
    , assert = require('assert'),
    ObjectID = require('mongodb').ObjectID;

// Connection URL
var url = 'mongodb://localhost:27017/mp';

var insertDocuments = function (db, collection_name, array, callback) {
    // Get the documents collection
    var collection = db.collection(collection_name);
    // Insert some documents
    collection.insertMany(array, function (err, result) {
        assert.equal(err, null);
        callback(result);
    });
}

var save = function (db, collection_name, obj, callback) {
    // Get the documents collection
    var collection = db.collection(collection_name);
    // Insert some documents
    //obj._id = ObjectID;
    collection.insert(obj, function (err, result) {
        assert.equal(err, null);
        //result.id = ObjectID;
        callback(result);
    });
}

var findDocuments = function (db, collection_name, find_obj, callback) {
    // Get the documents collection
    var collection = db.collection(collection_name);
    // Find some documents
    collection.find(find_obj).toArray(function (err, docs) {
        assert.equal(err, null);
        callback(docs);
    });
}


var updateDocument = function (db, collection_name, find_obj, set_obj, callback) {
    // Get the documents collection
    var collection = db.collection(collection_name);
    // Update document where a is 2, set b equal to 1
    collection.updateOne(find_obj
        , { $set: set_obj }, function (err, result) {
            assert.equal(err, null);
            callback(result);
        });
}


var removeDocument = function (db, collection_name, find_obj, callback) {
    // Get the documents collection
    var collection = db.collection(collection_name);
    // Insert some documents
    collection.deleteOne(find_obj, function (err, result) {
        assert.equal(err, null);
        assert.equal(1, result.result.n);
        console.log("Removed the document with the field a equal to 3");
        callback(result);
    });
}



function connect(cb) {
    // Use connect method to connect to the server
    MongoClient.connect(url, function (err, db) {
        assert.equal(null, err);
        console.log("Connected successfully to server");
        cb(db);
    });
}

module.exports = {
    Insert: function (collection_name, array, cb) {
        connect(function (db) {
            insertDocuments(db, collection_name, array, function (docs) {
                db.close();
                cb(docs);
            });
        });
    },
    save: function (collection_name, obj, cb) {
        connect(function (db) {
            save(db, collection_name, obj, function (docs) {
                db.close();
                cb(docs);
            });
        });
    },
    Update: function () {

    },
    Find: function (collection_name, find_obj, cb) {
        connect(function (db) {
            findDocuments(db, collection_name, find_obj, function (docs) {
                db.close();
                cb(docs);
            });
        });
    },
    Delete: function () {

    }
}