import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from './task';

@Injectable({
  providedIn: 'root',
})
export class HttpServiceService {
  constructor(private _http: HttpClient) {}

  getTasks(): Observable<Task[]> {
    return this._http.get<Task[]>(
      'nztodo.herokuapp.com/api/tasks/?format=json'
    );
  }
}
