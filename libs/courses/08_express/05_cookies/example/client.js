console.log('hello client3');

// document.cookie = "name=oeschger; SameSite=None; Secure";

document.cookie = "hello=; Path=/; Expires=Thu, 01 Jan 1970 00:00:00 GMT";

fetch('http://hello.com:3000/api/transfer').then((response) => {
  debugger
  console.log(response);
})
