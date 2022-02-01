/**
 * Different examples of *ngIf
 *
 * Created May 29th, 2021
 * @author: ywarezk
 */

import { Component } from '@angular/core';
import { of } from 'rxjs';

@Component({
  selector: 'az-ng-if-example',
  template: `
    <h1>Examples of *ngIf Directive</h1>

    <h2 *ngIf="someCondition1">Display if true</h2>

    <ng-template *ngIf="someCondition2; then ifTrue"> </ng-template>

    <ng-template #ifTrue>
      <h2>Display this if someCondition2 is true</h2>
    </ng-template>

    <ng-template *ngIf="someCondition3; then ifElseTrue; else ifElseFalse">
    </ng-template>

    <ng-template #ifElseTrue>
      <h2>Display this if someCondition3 is true</h2>
    </ng-template>

    <ng-template #ifElseFalse>
      <h2>Display this if someCondition3 is false</h2>
    </ng-template>

    <div *ngIf="user$ | async; let user">
      <h2>{{ user.firstName }} {{ user.lastName }}</h2>
    </div>
  `,
})
export class NgIfExampleComponent {
  someCondition1 = true;
  someCondition2 = true;
  someCondition3 = true;

  user$ = of({
    firstName: 'Yariv',
    lastName: 'Katz',
  });
}
