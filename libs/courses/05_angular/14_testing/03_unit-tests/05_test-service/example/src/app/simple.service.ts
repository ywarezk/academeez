import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SimpleService {
  hello() {
    return 'hello world';
  }
}
