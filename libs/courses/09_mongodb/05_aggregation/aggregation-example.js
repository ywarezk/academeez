const { MongoClient } = require('mongodb');
const axios = require('axios');

async function main() {
  const client = new MongoClient('mongodb://yariv:12345678@localhost:27017');
  await client.connect();

  const response = await axios.get(
    'https://nztodo.herokuapp.com/api/tasks/?format=json'
  );
  const db = client.db('aggregationExample');
  const zips = db.collection('zips');
  const rows = await zips
    .aggregate([
      {
        $project: {
          date: {
            $dateFromString: {
              dateString: '$when',
            },
          },
          title: '$title',
        },
      },
      {
        $sort: {
          date: -1,
        },
      },
      {
        $limit: 1,
      },
      {
        $project: {
          date: '$date',
        },
      },
    ])
    .toArray();
  // await zips.insertMany(response.data);
  // await zips.deleteMany({});
  // const zipsArray = await zips.find().toArray();
  console.log('now connecting');
}

main();
