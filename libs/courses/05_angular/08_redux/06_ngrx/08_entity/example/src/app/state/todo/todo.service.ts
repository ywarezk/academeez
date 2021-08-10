/**
 * Service to interact with the Todo api
 */

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Task } from './task.model';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  constructor(private _http: HttpClient) {}

  getTasks(): Observable<Task[]> {
    return this._http
      .get<Task[]>('https://nztodo.herokuapp.com/api/tasks/?format=json');
  }
}
