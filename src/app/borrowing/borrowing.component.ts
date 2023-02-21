import { Component } from '@angular/core';
import {Borrowing} from "../model/borrowings.model";

@Component({
  selector: 'app-borrowing',
  templateUrl: './borrowing.component.html',
  styleUrls: ['./borrowing.component.css']
})
export class BorrowingComponent {
  borrowingId = '';
  borrowingBook = '';
  borrowingUser = '';
  borrowings: Borrowing[] = [];
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
