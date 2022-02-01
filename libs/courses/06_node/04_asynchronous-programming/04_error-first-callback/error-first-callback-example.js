/**
 * Error-first callbacks
 * represent a common callback signature that is used
 * for asynchronous tasks
 *
 */

const { readFile } = require('fs');
const { resolve } = require('path');

// success - file exists
readFile(resolve(__dirname, 'README.md'), (err, fileContent) => {
  console.log(err); // will be  null on success
  console.log(fileContent.toString());
});

// Fail - file does not exist
readFile(resolve(__dirname, 'README1.md'), (err, fileContent) => {
  if (err) {
    console.log(err); // will contain an error
  } else {
    console.log(fileContent.toString());
  }
});

// Fail - file does not exist
// do not wrap in try and catch
try {
  readFile(resolve(__dirname, 'README1.md'), (err, fileContent) => {
    if (err) {
      throw err; // will crash the process
    } else {
      console.log(fileContent.toString());
    }
  });
} catch (err) {
  console.log(err.message); // this will not catch the error
}

// this will not run cause the process
// will crash
setTimeout(() => {
  console.log('this will not be printed - process crash');
}, 5000);
