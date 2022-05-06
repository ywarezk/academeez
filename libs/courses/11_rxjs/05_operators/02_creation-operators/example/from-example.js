"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * from can convert a promise to an observable
 */
const rxjs_1 = require("rxjs");
/**
 * create a timer promise that resolves after 1 second with an hello message
 */
const timerPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('hello listeners');
    }, 1000);
});
const timerObservable$ = (0, rxjs_1.from)(timerPromise);
timerObservable$.subscribe((msg) => {
    console.log(msg);
});
//# sourceMappingURL=from-example.js.map