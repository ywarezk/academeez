import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FibonacciService {

  /**
   * calculate the fibonacci number of n using recursion
   * @param n
   */
  fibonacci(n: number): number {
    if (n <= 1) {
      return n;
    }
    return this.fibonacci(n-1) + this.fibonacci(n-2);
  }

  constructor() { }
}
