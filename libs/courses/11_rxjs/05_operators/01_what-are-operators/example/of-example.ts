
// creation operators are imported from 'rxjs'
import { Observable, of } from 'rxjs';

// pipeable operators are imported from 'rxjs/operators'
// import { map } from 'rxjs/operators';

// ---1---2---3---'hello'---'foo'---true-|-->
const myRandomValues$: Observable<number | string | boolean> = of(1, 'hello', true);

myRandomValues$.subscribe((someValue) => {
  console.log(someValue);
});
console.log('after observable')
