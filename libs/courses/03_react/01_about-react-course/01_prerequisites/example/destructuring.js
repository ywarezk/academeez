/**
 * Destructuring - grabbing from object or array directly to variables
 */

// destructuring from object
const {a, b} = {a: 'hello', b: 'world'};

// destructuring from array
const [c, d, ...e] = [1,2,3,4,5]

// destructuring from function args
function sayHello({message}) {
  console.log(message);
}

sayHello({message: 'hello'});
