/**
 * from operator helps us convert certain data types to an observable
 * from can convert a promise to an observable
 * axios -> request
 * axios returns a promise
 * http://nztodo.herokuapp.com/api/tasks/?format=json
 */

import { from, Observable } from 'rxjs';
import axios, { AxiosResponse } from 'axios';

// Promise<AxiosResponse>
const axiosPromise = axios.get('http://nztodo.herokuapp.com/api/tasks/?format=json');

// Observable<AxiosResponse>
const response$: Observable<AxiosResponse> = from(axiosPromise);

response$.subscribe((response: AxiosResponse) => {
  console.log(response.status);
  console.log(response.data);
})
