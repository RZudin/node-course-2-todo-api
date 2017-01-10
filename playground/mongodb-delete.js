const {MongoClient} = require('mongodb')

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

/*  db.collection('Todos').deleteMany({text: 'Ead lunch'}).then((result) => {
    console.log(result);
  });*/

  /*db.collection('Todos').deleteOne({text: 'blabla'}).then((result) => {
    console.log(result);
  });*/

  /*db.collection('Todos').findOneAndDelete({completed: true}).then((result) => {
    console.log(result);
  });*/

  //db.close();
});
