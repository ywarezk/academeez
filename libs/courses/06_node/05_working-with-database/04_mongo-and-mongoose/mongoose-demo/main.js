/**
 * Using the UserModel
 * in here we will interact with the users collection
 */

const User = require('./entities/user/user.model');
const { mainModule } = require('process');
const { connect, mongo } = require('mongoose');
const { isError } = require('util');

/**
 * Since mongoose returns a promise
 * it will be easier to understand if we use async/await
 */
async function main() {
  // before interacting with the database we have to connect to it
  // usually the connection string is saved in environment variable
  const mongoose = await connect(
    `mongodb://${process.env.username}:${process.env.password}@mongo.academeez.com:80/usersDb`,
    { useUnifiedTopology: true, useNewUrlParser: true }
  );

  // delete all the users in the collection
  await User.remove();

  // create a user
  const firstUser = new User({
    firstName: 'Yariv',
    lastName: 'Katz',
    password: '12345678',
    email: 'noreply@academeez.com',
  });
  await firstUser.save();

  // another way to create a user
  await User.create({
    firstName: 'Piglet',
    lastName: 'Chaitovsky',
    password: '1234567',
    email: 'piglet@academeez.com',
  });

  // another way to create a user
  // this should fail validation
  try {
    await User.insertMany([
      {
        firstName: 'Sweetness',
        lastName: 'Bobi',
        password: '12345678',
        email: 'bad email format',
      },
      {
        firstName: 'Foo',
        lastName: 'Bar',
        email: 'password@is.required',
      },
    ]);
  } catch (err) {
    console.log(err.message);
  }

  // find user with email
  const user = await User.findOne({
    email: 'noreply@academeez.com',
  });

  // update the user i found
  await user.update({
    firstName: 'Changed',
  });

  // delete the user
  await User.deleteOne({
    firstName: 'Changed',
  });

  // find all the users and display their names
  const users = await User.find();
  for (const user of users) {
    console.log(user.firstName);
  }

  // close the connection
  mongoose.disconnect();
}

main();
