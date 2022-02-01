const { MongoClient } = require('mongodb');

const uri =
  'mongodb://yariv:12345678@localhost:27017?retryWrites=true&writeConcern=majority';

const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

client.connect().then(
  () => {
    console.log('connected to db');
  },
  (err) => {
    console.log('Failed to connect to db: ' + err.message);
  }
);
