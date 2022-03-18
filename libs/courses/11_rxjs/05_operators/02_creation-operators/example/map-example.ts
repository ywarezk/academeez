import { of } from 'rxjs';
import { map, filter } from 'rxjs/operators';

const multiplyTen$ = of(1, 2, 3).pipe(
  map(x => x * 10),
  filter((x) => x % 20 === 0)
);

multiplyTen$.subscribe(num => console.log(num));



