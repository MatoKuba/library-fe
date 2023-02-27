import { Component } from '@angular/core';
import { Borrowing } from '../model/borrowings.model';

@Component({
  selector: 'app-borrowing',
  templateUrl: './borrowing.component.html',
  styleUrls: ['./borrowing.component.css'],
})
export class BorrowingComponent {
  borrowingId = '';
  borrowingBook = '';
  borrowingUser = '';
  borrowings: Borrowing[] = [];
  editBorrowing: Borrowing | null = null;

  addOrUpdateBorrowing(): void {
    if (this.editBorrowing) {
      this.editBorrowing.bookId = this.borrowingBook;
      this.editBorrowing.userId = this.borrowingUser;

      this.borrowingBook = '';
      this.borrowingUser = '';
      this.editBorrowing = null;
    } else {
      const borrowing: Borrowing = {
        id: this.borrowingId,
        bookId: this.borrowingBook,
        userId: this.borrowingUser,
      };
      this.borrowings.push(borrowing);

      this.borrowingId = '';
      this.borrowingBook = '';
      this.borrowingUser = '';
    }
  }

  setEditBorrowing(borrowing: Borrowing): void {
    this.borrowingId = borrowing.id;
    this.borrowingBook = borrowing.bookId;
    this.borrowingUser = borrowing.userId;
    this.editBorrowing = borrowing;
  }

  deleteBorrowing(id: string): void {
    const index = this.borrowings.findIndex((borrowing) => borrowing.id === id);
    if (index !== -1) {
      this.borrowings.splice(index, 1);
    }
  }
}
