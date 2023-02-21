import { Component } from '@angular/core';
import {Book} from "../model/book.model";

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent {
  bookId = '';
  bookName = '';
  bookAuthor = '';
  bookAvailable = true;
  books: Book[] = [];
  addBook(): void {
    const book: Book = {
      id: this.bookId,
      name: this.bookName,
      author: this.bookAuthor,
      available: this.bookAvailable
    };
    this.books.push(book);

    this.bookId = '';
    this.bookName = '';
    this.bookAuthor = '';
    this.bookAvailable = true;
  }
}
