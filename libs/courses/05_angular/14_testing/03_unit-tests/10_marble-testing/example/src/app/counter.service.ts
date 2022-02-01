import { Injectable } from '@angular/core';
import { interval, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CounterService {
  getCounter(): Observable<number> {
    return interval(1000);
  }
}
