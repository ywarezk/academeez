
/**
 * from can convert a promise to an observable
 */
import { from, Observable } from 'rxjs';

/**
 * create a timer promise that resolves after 1 second with an hello message
 */
const timerPromise: Promise<string> = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('hello listeners');
  }, 1000)
});

const timerObservable$ : Observable<string> = from(timerPromise);

timerObservable$.subscribe((msg: string) => {
  console.log(msg);
})


