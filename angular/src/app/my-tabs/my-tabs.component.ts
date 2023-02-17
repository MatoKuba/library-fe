import { Component } from '@angular/core';

@Component({
  selector: 'app-my-tabs',
  template: `
    <mat-tab-group>
      <mat-tab label="Users">
        <app-users></app-users>
      </mat-tab>
      <mat-tab label="Books">
        <app-books></app-books>
      </mat-tab>
      <mat-tab label="Borrowings">
        <app-borrowings></app-borrowings>
      </mat-tab>
    </mat-tab-group>
  `,
})
export class MyTabsComponent {}
