/**
 *
 */

const { MongoClient } = require('mongodb');

async function main() {
  const client = new MongoClient('mongodb://yariv:12345678@localhost:27017');
  await client.connect();
  const validationExample = client.db('validation-example');
  const users = validationExample.collection('users');

  await users.updateOne({ name: 'Yariv' }, { $push: { images: 'image2' } });
  await users.updateOne({ name: 'Yariv' }, { $push: { images: 'image3' } });
  try {
    await users.updateOne({ name: 'Yariv' }, { $push: { images: 'image3' } });
  } catch (err) {
    console.log(err.message);
  }

  // await users.drop();
  // const users = await validationExample.createCollection('users', {
  //   validator: {
  //     $jsonSchema: {
  //       // each document has to be an object
  //       bsonType: "object",
  //       // required fields
  //       required: ['name', 'age', 'images'],
  //       properties: {
  //         name: {
  //           bsonType: "string",
  //           description: "must be a string and is required"
  //         },
  //         age: {
  //           bsonType: "int",
  //           minimum: 3,
  //           maximum: 200,
  //         },
  //         images: {
  //           bsonType: "array",
  //           maxItems: 3
  //         }
  //       }
  //     }
  //   }
  // });

  // await users.insertOne({
  //   name: 'Yariv',
  //   age: 36,
  //   images: ['image1']
  // });

  // try {
  //   await users.insertOne(
  //     {
  //       name: 'Yariv',
  //       age: 36
  //     }
  //   )
  // } catch(err) {
  //   console.log(err);
  // }

  console.log('all done');
}

main();
