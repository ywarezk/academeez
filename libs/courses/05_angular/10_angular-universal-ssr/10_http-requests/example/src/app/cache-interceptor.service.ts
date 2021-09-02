import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { HttpEvent, HttpEventType, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { makeStateKey, TransferState } from '@angular/platform-browser';
import { isPlatformBrowser } from '@angular/common';
import { tap } from 'rxjs/operators';
import { Task } from './task/task';



@Injectable({
  providedIn: 'root'
})
export class CacheInterceptorService implements HttpInterceptor {

  constructor(
    private _transferState: TransferState,
    @Inject(PLATFORM_ID) private _platformId: Object
  ) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const tasksKey = makeStateKey<Task[]>(req.url);
    if (isPlatformBrowser(this._platformId) && this._transferState.hasKey(tasksKey)) {
      return of(new HttpResponse({
        body: this._transferState.get(tasksKey, []),
        status: 200
      }));
    } else {
      return next.handle(req).pipe(
        tap((e: HttpEvent<any>) => {
          if (e.type === HttpEventType.Response) {
            this._transferState.set(tasksKey, e.body);
          }
        })
      )
    }
  }
}
