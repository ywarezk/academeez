/**
 * going over the different process events
 */

// exit events
process.on('beforeExit', () => {
  console.log('before exit');
});

process.on('exit', (code) => {
  console.log(`The exit code is: ${code}`);
});

// process.exit(-10);

// process.on('uncaughtException', () => {
//   console.log('now the process will not crash');
// });

setTimeout(() => {
  console.log('this will run now although the crash');
}, 2000);

throw new Error('something happened');
