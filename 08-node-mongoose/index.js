const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

const Dishes = require('./models/dishes');

const url = 'mongodb://localhost:27017/conFusion';
const connect = mongoose.connect(url, {
  useMongoClient: true
});

connect.then((db) => {
  console.log("Connected correctly to the server");

  var newDish = Dishes({
    name: "Uthappizza",
    description: "test"
  });
  newDish.save()
    .then((dish) => {
      console.log(dish);
      return Dishes.find({}).exec();
    })
    .then((dishes) => {
      console.log(dishes);
      return Dishes.updateOne({name: "Uthappizza"}, {$set: {description: "Updated description"}}).exec();
    })
    .then((updates) => {
      console.log("After updated");
      console.log(updates);
      return Dishes.find({}).exec();
    })
    .then((dishes) => {
      console.log(dishes);
      return db.collection('dishes').drop();
    })
    .then(() => {
      return db.close();
    })
    .catch((err) => {
      console.log(err);
    });
});
