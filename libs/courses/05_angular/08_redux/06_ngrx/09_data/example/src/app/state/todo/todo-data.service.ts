/**
 * used for grabbing the tasks
 */

import { Injectable } from "@angular/core";
import { EntityCollectionServiceBase, EntityCollectionServiceElementsFactory } from '@ngrx/data';
import { Task } from "./task.model";


@Injectable({
  providedIn: 'root'
})
export class TodoDataService extends EntityCollectionServiceBase<Task> {
  constructor(serviceElementFactory: EntityCollectionServiceElementsFactory) {
    super('Task', serviceElementFactory);
  }
}
