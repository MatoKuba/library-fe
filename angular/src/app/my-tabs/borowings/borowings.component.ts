import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

interface User {
  id: number;
  name: string;
  contact: string;
}

interface Book {
  id: number;
  title: string;
  author: string;
  available: boolean;
}

interface Borrowing {
  id: number;
  user: User;
  book: Book;
}

@Component({
  selector: 'app-borrowings',
  template: `
    <form [formGroup]="borrowingForm" (ngSubmit)="onSubmit()">
      <label>
        User ID:
        <input formControlName="userId" type="text">
      </label>
      <label>
        Book ID:
        <input formControlName="bookId" type="text">
      </label>
      <button type="submit">Borrow Book</button>
    </form>

    <ul>
      <li *ngFor="let borrowing of borrowings">
        {{ borrowing.id }} - {{ borrowing.user.name }} - {{ borrowing.book.title }}
        <button *ngIf="!borrowing.book.available" (click)="returnBook(borrowing)">Return Book</button>
      </li>
    </ul>
  `,
})
export class BorowingsComponent {
  borrowingForm: FormGroup;
  users: User[] = [
    { id: 1, name: 'Alice', contact: 'alice@example.com' },
    { id: 2, name: 'Bob', contact: 'bob@example.com' },
    { id: 3, name: 'Charlie', contact: 'charlie@example.com' },
  ];
  books: Book[] = [
    { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', available: true },
    { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', available: true },
    { id: 3, title: '1984', author: 'George Orwell', available: true },
  ];
  borrowings: Borrowing[] = [];

  constructor(private fb: FormBuilder) {
    this.borrowingForm = this.fb.group({
      userId: ['', Validators.required],
      bookId: ['', Validators.required],
    });
  }

  onSubmit() {
    const userId = Number(this.borrowingForm.value.userId);
    const bookId = Number(this.borrowingForm.value.bookId);
    const user = this.users.find((u) => u.id === userId);
    const book = this.books.find((b) => b.id === bookId);
    if (user && book && book.available) {
      book.available = false;
      const borrowing: Borrowing = { id: this.borrowings.length + 1, user, book };
      this.borrowings.push(borrowing);
      this.borrowingForm.reset();
    }
  }

  returnBook(borrowing: Borrowing) {
    const index = this.borrowings.indexOf(borrowing);
    if (index !== -1) {
      borrowing.book.available = true;
      this.borrowings.splice(index, 1);
    }
  }

}
