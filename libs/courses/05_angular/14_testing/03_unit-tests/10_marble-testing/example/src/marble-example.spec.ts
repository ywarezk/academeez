/**
 * This file contain a simple examples of creating and comparing observable
 * using marble diagrams
 */

import { TestScheduler } from 'rxjs/testing';

describe('marble example', () => {
  let scheduler: TestScheduler;

  beforeEach(() => {
    scheduler = new TestScheduler((actual, expected) => {
      expect(actual).toEqual(expected);
    })
  })

  it('cold observable example', () => {
    scheduler.run(({ cold, flush }) => {
      const obs = cold('--a--a--a---');
      const fail = cold('--a--#');
      const complete = cold('--a--|');
      let isFail = false;
      let isComplete = false;
      obs.subscribe((value) => {
        expect(value).toEqual('a')
      });
      fail.subscribe(
        (value) => {
          expect(value).toEqual('a')
        },
        () => {
          isFail = true;
        }
      )
      complete.subscribe(
        {
          next: (value) => {
            expect(value).toEqual('a')
          },
          complete: () => {
            isComplete = true;
          }
        }
      )
      flush();
      expect(isFail).toEqual(true);
      expect(isComplete).toEqual(true);
    })
  });

  it('hot observable example', () => {
    scheduler.run(({ hot, flush, expectObservable }) => {
      const hotExample = hot('--a--b-----c--d');
      const sub = '           ---------^---!';
      expectObservable(hotExample, sub).toBe('-----------c--')
    })
  })
})
