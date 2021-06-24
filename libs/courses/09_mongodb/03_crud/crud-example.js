const { MongoClient } = require('mongodb');

async function main() {
  const client = new MongoClient('mongodb://yariv:12345678@localhost:27017');
  await client.connect();

  const db = client.db('course');
  const usersCollection = db.collection('users');

  // create
  await usersCollection.insertMany([
    {firstName: 'hello', lastName: 'world'},
    {firstName: 'academeez', lastName: 'is awesome!'},
    {firstName: 'foo', lastName: 'bar'},
  ])

  // find
  let users = await usersCollection.find().toArray();
  console.log(users);

  // update
  await usersCollection.updateMany({firstName: 'hello'}, { $set: { firstName: 'lurem ipsum'}});

  users = await usersCollection.find().toArray();
  console.log(users);

  // delete
  await usersCollection.deleteMany({});

  users = await usersCollection.find().toArray();
  console.log(users);

}

main();
