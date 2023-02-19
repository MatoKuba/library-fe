import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  template: `
    <form [formGroup]="borrowingForm" (ngSubmit)="onSubmit()">
      <div formGroupName="borrowing">
        <h3>Select a user:</h3>
        <div>
          <button type="button" (click)="selectUser('user1')">User 1</button>
          <button type="button" (click)="selectUser('user2')">User 2</button>
          <button type="button" (click)="selectUser('user3')">User 3</button>
        </div>
        <h3>Select a book:</h3>
        <div>
          <button type="button" (click)="selectBook('book1')">Book 1</button>
          <button type="button" (click)="selectBook('book2')">Book 2</button>
          <button type="button" (click)="selectBook('book3')">Book 3</button>
        </div>
      </div>
      <button type="submit" [disabled]="!borrowingForm.valid">Borrow</button>
    </form>

    <ul>
      <li *ngFor="let borrowing of borrowingList">{{ borrowing.id }} - {{ borrowing.userId }} - {{ borrowing.bookId }}</li>
    </ul>
  `,
})
export class AppComponent {
  borrowingForm: FormGroup;
  borrowingList: any[] = [];
  counter: number = 1;

  constructor(private fb: FormBuilder) {
    this.borrowingForm = this.fb.group({
      borrowing: this.fb.group({
        userId: ['', Validators.required],
        bookId: ['', Validators.required],
      }),
    });
  }

  selectUser(userId: string) {
    this.borrowingForm.get('borrowing.userId')?.setValue(userId);
  }

  selectBook(bookId: string) {
    this.borrowingForm.get('borrowing.bookId')?.setValue(bookId);
  }

  onSubmit() {
    const borrowing = {
      id: this.counter++,
      userId: this.borrowingForm.value.borrowing.userId,
      bookId: this.borrowingForm.value.borrowing.bookId,
    };
    this.borrowingList.push(borrowing);
    this.borrowingForm.reset();
  }
}
