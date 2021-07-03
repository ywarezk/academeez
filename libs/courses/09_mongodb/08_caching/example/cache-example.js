const { MongoClient } = require('mongodb');

const client = new MongoClient('mongodb://yariv:12345678@localhost:27017');

async function main() {
  try {
    await client.connect();
    const db = client.db('cache-example');
    // db.server
    // const stats = await db.stats();
    // console.log(stats);
    const users = db.collection('users');
    const stats = await users.stats()
    console.time('fetch')
    const foundUsers = await users.find({
      age: {
        $gt: 50
      }
    }).toArray()
    console.timeEnd('fetch')
    // console.log(stats);
    // const data = [];
    // for (let i = 0; i < 100000; i++) {
    //   data.push({
    //     name: 'Yariv',
    //     age: Math.floor(Math.random() * 100)
    //   })
    // }
    // await users.insertMany(data);
    // console.log('successfully insert 100000 users');
  } catch(err) {
    console.log(err);
  }

}

main();
