import {Component, EventEmitter, Output} from '@angular/core';
import { Borrowing } from '../../model/borrowings.model';

@Component({
  selector: 'app-borrowing-page',
  templateUrl: './borrowing-page.component.html',
  styleUrls: ['./borrowing-page.component.css'],
})
export class BorrowingPageComponent {
  borrowings: Array<Borrowing> = [];
  borrowing?: Borrowing;

  @Output()
  borrowingToUpdate = new EventEmitter<number>();


  createBorrowing(borrowing: Borrowing): void {
    this.borrowings.push(borrowing);
    console.log('BORROWINGS:', this.borrowings);
  }

  updateBorrowing(borrowing: Borrowing): void {
    const index = this.borrowings.findIndex(
      borrowing => borrowing.id === borrowing.id);
    if (index !== -1) {
      this.borrowings[index] = borrowing;
      this.borrowing = undefined;
    }
  }


  selectBorrowingToUpdate(borrowingId: number): void {
    this.borrowing = this.borrowings.find(borrowing =>
      borrowing.id === borrowingId);
  }

  deleteBorrowing(borrowingId: number): void {
    const index = this.borrowings.findIndex(borrowing =>
      borrowing.id === borrowingId);
    if (index !== -1) { this.borrowings.splice(index, 1); }
  }
}
