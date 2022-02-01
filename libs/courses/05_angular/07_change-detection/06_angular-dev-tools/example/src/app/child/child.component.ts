import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

interface ListItem {
  id: number;
  title: string;
}

@Component({
  selector: 'app-child',
  template: `
    <h1>Long List</h1>
    <p>Let's optimize this list</p>
    <button (click)="refreshList()">Create a new list</button>
    <ul>
      <li *ngFor="let item of list">{{ item.title }}</li>
    </ul>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChildComponent implements OnInit {
  list: ListItem[] = [];

  ngOnInit() {
    this._generateList();
  }

  private _generateList() {
    this.list = [];
    for (let i = 0; i < 10000; i++) {
      this.list.push({ id: i, title: Math.random().toString() });
    }
  }

  refreshList() {
    this._generateList();
  }

  trackById(index: number, item: ListItem) {
    return item.id;
  }
}
