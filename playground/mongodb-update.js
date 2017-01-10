const {MongoClient, ObjectID} = require('mongodb')

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  db.collection('Todos').findOneAndUpdate({
    _id: new ObjectID('5874f56657107a53f4da3753')
  }, {
    $set: {
      text: 'new todo'
    }
  }, {
      returnOriginal: false
  }).then((res) => {
    console.log(res);
  });

  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID('5874f66f088227409c07f824')
  }, {
    $set: {
      name: 'Roman'
    },
    $inc: {
      age: 1
    }
  }, {
    returnOriginal: false
  }).then((res) => {
    console.log(res);
  })
  //db.close();
});
