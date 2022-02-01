import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Task } from '../task/task';
import { TaskService } from '../task/task.service';

@Component({
  selector: 'academeez-todo-list',
  template: `
    <p>todo-list works!</p>

    <ul>
      <li *ngFor="let task of tasks$ | async">
        {{ task.title }}
      </li>
    </ul>
  `,
})
export class TodoListComponent implements OnInit {
  tasks$: Observable<Task[]> = of([]);

  constructor(private _taskService: TaskService) {}

  ngOnInit() {
    this.tasks$ = this._taskService.getTasks();
  }
}
