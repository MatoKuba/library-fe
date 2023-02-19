import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';



interface Borrowing {
  id: number;
  user: string;
  book: string;
}

@Component({
  selector: 'app-borrowings',
  template: `
    <form [formGroup]="borrowingForm" (ngSubmit)="onSubmit()">
      <label>
        ID:
        <input formControlName="id" type="text">
      </label>
      <label>
        User:
        <input formControlName="user" type="text">
      </label>
      <label>
        Book:
        <input formControlName="book" type="text">
      </label>
      <button type="submit">Submit</button>
    </form>

    <div>
      <ul>
        <li *ngFor="let borrowing of borrowings">
          {{ borrowing.id }} - {{ borrowing.user }} - {{ borrowing.book }}
          <button type="button" (click)="returnBook(borrowing)">Return</button>
        </li>
      </ul>
    </div>

  `,
})
export class BorrowingsComponent {
  borrowingForm: FormGroup;
  borrowings: Borrowing[] = [
    { id: 1, user: 'Alice', book: 'The Great Gatsby'},
    { id: 2, user: 'Bob', book: 'To Kill a Mockingbird'},
    { id: 3, user: 'Charlie', book: '1984'},
  ];

  constructor(private fb: FormBuilder) {
    this.borrowingForm = this.fb.group({
      id: ['', Validators.required],
      user: ['', Validators.required],
      book: ['', Validators.required],
    });
  }

  onSubmit() {
    const borrowing = this.borrowingForm.value;
    this.borrowings.push(borrowing);
    this.borrowingForm.reset();
  }

  returnBook(borrowing: Borrowing) {
    const index = this.borrowings.indexOf(borrowing);
    if (index !== -1) {
      this.borrowings.splice(index, 1);
    }
  }
}


