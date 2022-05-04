/**
 * from is often used to convert Promise to Observable
 */
import { from, Observable } from 'rxjs';

/**
 * Create a promise which resolves after 1 second with an hello world message
 */
const timerPromise: Promise<string> = new Promise(( resolve ) => {
  setTimeout(() => {
    resolve('hello world');
  }, 1000)
});

/**
 * convert promise to observable
 */
const timerObservable: Observable<string> = from(timerPromise);

timerObservable.subscribe((msg: string) => {
  console.log(msg); // hello world
})
