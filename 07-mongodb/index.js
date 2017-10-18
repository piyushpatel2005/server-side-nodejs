const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

const url = 'mongodb://localhost:27017/conFusion';

const dboper = require('./operations');

MongoClient.connect(url, (err, db) => {
  assert.equal(err, null);
  console.log("Connected correctly to server.");

  const collection = db.collection('dishes');
  dboper.insertDocument(db, {name: "Vadonut", description: "test"}, "dishes", (result) => {
    console.log("Insert document:\n", result.ops);
    dboper.findDocuments(db, "dishes", (docs) => {
      console.log("Found documents:\n", docs);
      dboper.updateDocument(db, {name: "Vadonut"}, {description: "updated test"}, "dishes", (result) => {
        console.log("Updated document:\n", result.result.n);
        dboper.findDocuments(db, "dishes", (docs) => {
          console.log("Found updated documents:\n", docs);
          db.dropCollection("dishes", (result) => {
            console.log("Dropped collection:", result);
            db.close();
          });
        });
      });
    });
  });
});
