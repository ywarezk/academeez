
import { Observable } from 'rxjs';

/**
 * a pipeable operator gets an old observable
 */
function map(oldObservable$: Observable<any>) {

  return new Observable((observer) => {

    oldObservable$.subscribe((someValue) => {

      // some manipulation to someValue will manipulte to variable anotherValue
      observer.next(anotherValue);

    })

  });

}


someObservable$.pipe(
  map()
)
