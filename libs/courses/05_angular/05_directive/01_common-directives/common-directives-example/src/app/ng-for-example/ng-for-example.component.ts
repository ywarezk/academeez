import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'az-ng-for-example',
  template: `
    <h1>Examples of *ngFor directive</h1>

    <h2>Simple and most common</h2>
    <ul>
      <li *ngFor="let item of items">
        {{ item }}
      </li>
    </ul>

    <h2>With trackBy function</h2>

    <ul>
      <li *ngFor="let item of items2; trackBy: trackById">
        {{ item.firstName }}
      </li>
    </ul>

    <h2>With extra variables</h2>

    <ul>
      <li
        *ngFor="
          let item of items;
          index as i;
          first as isFirst;
          even as isEven;
          odd as isOdd;
          last as isLast
        "
      >
        {{ i }} {{ item }} {{ isFirst }} {{ isEven }} {{ isOdd }} {{ isLast }}
      </li>
    </ul>
  `,
})
export class NgForExampleComponent implements OnInit {
  items = ['this', 'is', 'the', 'common', 'loop'];

  items2 = [
    { id: 1, firstName: 'Yariv', lastName: 'Katz' },
    { id: 2, firstName: 'Pigletshvily', lastName: 'Chaitovski' },
    { id: 3, firstName: 'Sweetness', lastName: 'Fluffy Belly' },
  ];

  trackById(index: number, item: any) {
    return item.id;
  }

  ngOnInit() {
    setTimeout(() => {
      console.log('timer');
      this.items2[0] = { id: 1, firstName: 'academeez', lastName: 'Katz' };
    }, 3000);
  }
}
