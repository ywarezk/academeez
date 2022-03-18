"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// creation operators are imported from 'rxjs'
const rxjs_1 = require("rxjs");
// pipeable operators are imported from 'rxjs/operators'
// import { map } from 'rxjs/operators';
// ---1---2---3---'hello'---'foo'---true-|-->
const myRandomValues$ = (0, rxjs_1.of)(1, 2, 3, 'hello', 'foo', true);
myRandomValues$.subscribe((someValue) => {
    console.log(someValue);
});
console.log('after observable');
//# sourceMappingURL=of-example.js.map