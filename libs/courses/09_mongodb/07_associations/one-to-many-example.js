const { MongoClient } = require('mongodb');

async function main() {
  const client = new MongoClient('mongodb://yariv:12345678@localhost:27017');
  await client.connect();
  const db = client.db('mongoCourse');


  const usersCollection = db.collection('users');
  const user = await usersCollection.insertOne({firstName: 'Yariv', lastName: 'Katz'})

  const addressCollection = db.collection('addresses');
  await addressCollection.insertMany([
    {country: 'Israel', city: 'Tel Aviv', userId: user.insertedId},
    {country: 'Israel', city: 'Ramat Gan', userId: user.insertedId},
  ])

  const addresses = await addressCollection.aggregate([
    {
      $match: {
        city: 'Tel Aviv'
      }
    },
    {
      $lookup: {
        from: 'users',
        localField: 'userId',
        foreignField: "_id",
        as: "user"
      }
    }
  ]).toArray()
  console.log(addresses);
}

main();

