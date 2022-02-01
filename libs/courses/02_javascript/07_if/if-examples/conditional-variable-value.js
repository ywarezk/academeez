/**
 * In javascript we often give value to variables
 * based on some condition
 */

function valueWithOr(someValue) {
  const someVariable = someValue || 'some default value';
  console.log(someVariable);
}

valueWithOr(undefined); // some default value
valueWithOr(null); // some default value
valueWithOr(''); // some default value
valueWithOr('this will be taken'); // this will be taken

function valueWithAnd(someValue) {
  const someVariable = someValue && 'some default value';
  console.log(someVariable);
}

valueWithAnd(undefined); // undefined
valueWithAnd(null); // null
valueWithAnd(''); // ""
valueWithAnd('this will not be taken'); // some default value

function valueWithCoalescing(someValue) {
  const someVariable = someValue ?? 'some default value';
  console.log(someVariable);
}

valueWithCoalescing(undefined); // some default value
valueWithCoalescing(null); // some default value
valueWithCoalescing(false); // false
valueWithCoalescing(''); // ""
valueWithCoalescing('this will be taken'); // this will be taken
