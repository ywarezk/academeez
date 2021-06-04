/**
 * Few examples of how the prototype works in Javascript
 */

 class Person {
   sayHello() {
     console.log('hello world');
   }
 }

// Person.prototype => {sayHello: function() {}}
 console.log(Person.prototype);

// instance will get the prototype of Person attached
const me = new Person();
console.log(me.__proto__ === Person.prototype);
