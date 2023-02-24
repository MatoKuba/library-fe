import { Component } from '@angular/core';
import {User} from "./model/user.model";
import {Book} from "./model/book.model";
import {Borrowing} from "./model/borrowings.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  persons: Array<User> = [];
  books: Array<Book> = [];
  borrowings: Array<Borrowing> = [];


}
