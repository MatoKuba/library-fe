import { Component, EventEmitter, Output } from '@angular/core';
import { Borrowing} from "../../common/model/borrowing.model";
import { BorrowingService} from "../../common/service/borrowing.service";

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

  constructor(private borrowingService: BorrowingService) {
    this.getBorrowings();
  }

  getBorrowings(): void {
    this.borrowingService.getBorrowings().subscribe((borrowings: Borrowing[]) => {
      this.borrowings = borrowings;
    });
  }

  createBorrowing(borrowing: Borrowing): void {
    this.borrowingService.createBorrowing(borrowing)
      .subscribe(() => {
        console.log('Pôžička bola úspešne vytvorená.');
        this.getBorrowings();
      });
  }

  updateBorrowing(borrowing: Borrowing): void {
    this.borrowingService.updateBorrowing(borrowing)
      .subscribe(() => {
        console.log('Pôžička bola úspešne upravená.');
        this.getBorrowings();
      });
    this.borrowing = undefined;
  }

  selectBorrowingToUpdate(borrowingId: number): void {
    this.borrowingService.getBorrowing(borrowingId)
      .subscribe((borrowing: Borrowing) => {
        this.borrowing = borrowing;
        this.borrowingToUpdate.emit(borrowing.id);
      });
  }

  deleteBorrowing(borrowingId: number): void {
    this.borrowingService.deleteBorrowing(borrowingId).subscribe(() => {
      console.log('Pôžička bola úspešne zmazaná.');
      this.getBorrowings();
    });
  }
}
