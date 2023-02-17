import { Component } from '@angular/core';

interface User {
  id: string;
  name: string;
  contact: string;
}

interface Book {
  id: string;
  name: string;
  author: string;
  available: boolean;
}

interface Borrowing {
  id: string;
  bookId: string;
  userId: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  showUser = false;
  showBook = false;
  showBorrowing = false;

  userId = '';
  userName = '';
  userContact = '';
  users: User[] = [];

  bookId = '';
  bookName = '';
  bookAuthor = '';
  bookAvailable = true;
  books: Book[] = [];

  borrowingId = '';
  borrowingBook = '';
  borrowingUser = '';
  borrowings: Borrowing[] = [];

  showUsers(): void {
    this.showUser = true;
    this.showBook = false;
    this.showBorrowing = false;
  }

  showBooks(): void {
    this.showUser = false;
    this.showBook = true;
    this.showBorrowing = false;
  }

  showBorrowings(): void {
    this.showUser = false;
    this.showBook = false;
    this.showBorrowing = true;
  }

  addUser(): void {
    const user: User = {
      id: this.userId,
      name: this.userName,
      contact: this.userContact
    };
    this.users.push(user);

    this.userId = '';
    this.userName = '';
    this.userContact = '';
  }

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

  addBorrowing(): void {
    const borrowing: Borrowing = {
      id: this.borrowingId,
      bookId: this.borrowingBook,
      userId: this.borrowingUser
    };
    this.borrowings.push(borrowing);

    this.borrowingId = '';
    this.borrowingBook = '';
    this.borrowingUser = '';
  }
}
