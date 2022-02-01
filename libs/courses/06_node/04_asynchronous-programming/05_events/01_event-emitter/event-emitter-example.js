/**
 * Node.js EventEmitter class for dealing with Events
 */

const { EventEmitter } = require('events');
const { readFile } = require('fs');
const { resolve } = require('path');

class FileReader extends EventEmitter {
  constructor(path) {
    super();
    readFile(path, (err, content) => {
      if (err) {
        this.emit('error', err);
      } else {
        this.fileContent = content.toString();
        this.emit('ready', this.fileContent);
      }
    });
  }
}

// success
const fileReader = new FileReader(resolve(__dirname, 'README.md'));
fileReader.on('ready', function (content) {
  console.log(content);
});

// error
const fileReader2 = new FileReader(resolve(__dirname, 'README1.md'));

// not catching the error will crash the process
fileReader2.on('error', function (err) {
  console.log(err.message);
});

setTimeout(() => {
  console.log('this will not run unless you implement the error');
}, 5000);
