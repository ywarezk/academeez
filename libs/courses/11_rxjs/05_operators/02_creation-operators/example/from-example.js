"use strict";
/**
 * from is often used to convert Promise to Observable
 */
Object.defineProperty(exports, "__esModule", { value: true });
const rxjs_1 = require("rxjs");
/**
 * Create a promise which resolves after 1 second with an hello world message
 */
const timerPromise = new Promise((resolve) => {
    setTimeout(() => {
        resolve('hello world');
    }, 1000);
});
/**
 * convert promise to observable
 */
const timerObservable = (0, rxjs_1.from)(timerPromise);
timerObservable.subscribe((msg) => {
    console.log(msg); // hello world
});
//# sourceMappingURL=from-example.js.map