"use strict";
/**
 * from operator helps us convert certain data types to an observable
 * from can convert a promise to an observable
 * axios -> request
 * axios returns a promise
 * http://nztodo.herokuapp.com/api/tasks/?format=json
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const rxjs_1 = require("rxjs");
const axios_1 = __importDefault(require("axios"));
// Promise<AxiosResponse>
const axiosPromise = axios_1.default.get('http://nztodo.herokuapp.com/api/tasks/?format=json');
// Observable<AxiosResponse>
const response$ = (0, rxjs_1.from)(axiosPromise);
response$.subscribe((response) => {
    console.log(response.status);
    console.log(response.data);
});
//# sourceMappingURL=from-example.js.map