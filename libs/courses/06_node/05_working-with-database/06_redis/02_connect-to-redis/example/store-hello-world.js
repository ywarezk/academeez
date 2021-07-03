/**
 * Connecting to Redis and storing key and value
 */

const redis = require("redis");
const { promisify } = require('util');
const client = redis.createClient();

client.on('error', (err) => {
  console.log(`Failed to connect: ${err.message}`);
})

async function main() {
  try {
    const get = promisify(client.get);
    const set = promisify(client.set);

    // client.get('hello', (err, value) => {
    //   console.log(value);
    // })

    // let hello = await get('hello');
    // console.log(hello);

    // await set('hello', 'world');
    client.set('hello', {foo: 'bar'}, (err, temp) => {
      debugger;
    })

  } catch(err) {
    console.log(err);
  }
}

main();
