import { isPlatformBrowser } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { makeStateKey, TransferState } from '@angular/platform-browser';
import { tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { Task } from './task';

const tasksKey = makeStateKey<Task[]>('tasks');

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  constructor(
    private _http: HttpClient,
    private _transferState: TransferState,
    @Inject(PLATFORM_ID) private _platformId: Object
  ) {}

  getTasks(): Observable<Task[]> {
    // if (isPlatformBrowser(this._platformId) && this._transferState.hasKey(tasksKey)) {
    //   return of(this._transferState.get(tasksKey, []));
    // } else {
    // return this._http.get<Task[]>('http://nztodo.herokuapp.com/api/tasks/?format=json').pipe(
    //   tap(tasks => this._transferState.set(tasksKey, tasks))
    // );
    // }

    return this._http.get<Task[]>(
      'http://nztodo.herokuapp.com/api/tasks/?format=json'
    );
  }
}
