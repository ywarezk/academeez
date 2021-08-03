/**
 * Array.prototype.map, Array.prototype.filter
 */

// map
// transforms the items in an array using a transformation function
const myArray = ['hello', 'world', 'foo', 'bar'];
const numberArray = myArray.map((greeting) => {
  return greeting.length;
})

// filter
// reduce the items in an array based on a predicate functions
const fullArray = [1,2,3,4,5,6,7,8];
const evenArray = fullArray.filter((num) => {
  return num % 2 === 0;
});
