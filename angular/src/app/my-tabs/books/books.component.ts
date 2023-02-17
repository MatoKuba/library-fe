import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

interface Book {
  id: number;
  title: string;
  author: string;
  available: boolean;
}

@Component({
  selector: 'app-books',
  template: `
    <form [formGroup]="bookForm" (ngSubmit)="onSubmit()">
      <label>
        Book ID:
        <input formControlName="id" type="text">
      </label>
      <label>
        Title:
        <input formControlName="title" type="text">
      </label>
      <label>
        Author:
        <input formControlName="author" type="text">
      </label>
      <label>
        Available:
        <input formControlName="available" type="checkbox">
      </label>
      <button type="submit">Submit</button>
    </form>

    <div>
      <ul>
        <li *ngFor="let book of books">
          {{book.id}} - {{book.title}}  -  {{book.author}}
          <span *ngIf="book.available">Available</span>
          <span *ngIf="!book.available">Not available</span>
        </li>
      </ul>
    </div>
  `,
})
export class BooksComponent {
  bookForm: FormGroup;
  books: Book[] = [
    { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', available: true },
    { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', available: true },
    { id: 3, title: '1984', author: 'George Orwell', available: false },
  ];

  constructor(private fb: FormBuilder) {
    this.bookForm = this.fb.group({
      id: ['', Validators.required],
      title: ['', Validators.required],
      author: ['', Validators.required],
      available: [false, Validators.required],
    });
  }

  onSubmit() {
    const book = this.bookForm.value;
    this.books.push(book);
    this.bookForm.reset();
  }
}
