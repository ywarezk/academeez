"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
const multiplyTen$ = (0, rxjs_1.of)(1, 2, 3).pipe((0, operators_1.map)(x => x * 10), (0, operators_1.filter)((x) => x % 20 === 0));
multiplyTen$.subscribe(num => console.log(num));
//# sourceMappingURL=map-example.js.map