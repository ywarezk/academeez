const { MongoClient } = require('mongodb');

async function main() {
  const client = new MongoClient('mongodb://yariv:12345678@localhost:27017');
  await client.connect();
  const db = client.db('mongoCourse');

  const settingsCollection = db.collection('settings');
  const settings = await settingsCollection.insertOne({
    isNotification: false,
    website: 'https://academeez.com',
  });

  const usersCollection = db.collection('users');
  await usersCollection.insertOne({
    firstName: 'Yariv',
    lastName: 'Katz',
    settings: settings.insertedId,
  });

  const users = await usersCollection
    .aggregate([
      {
        $lookup: {
          from: 'settings',
          localField: 'settings',
          foreignField: '_id',
          as: 'settings',
        },
      },
    ])
    .toArray();
  console.log(users);
}

main();
