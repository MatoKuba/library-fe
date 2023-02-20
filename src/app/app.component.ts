import { Component } from '@angular/core';
import {User} from "./model/user.model";
import {Book} from "./model/book.model";
import {Borrowing} from "./model/borrowings.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',

})
export class AppComponent {
  showUser = false;
  showBook = false;
  showBorrowing = false;

  persons: Array<User> = [];

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
}
