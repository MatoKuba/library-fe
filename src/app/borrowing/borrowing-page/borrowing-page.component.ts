import { Component, EventEmitter, Output } from '@angular/core';
import { Borrowing} from "../../common/model/borrowing.model";
import { BorrowingService} from "../../common/service/borrowing.service";
import {ToastService} from "angular-toastify";
import {Router} from "@angular/router";

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

  constructor(private borrowingService: BorrowingService, private toastService: ToastService, private router: Router) {
    this.getBorrowings();
  }

  getBorrowings(): void {
    this.borrowingService.getBorrowings().subscribe((borrowings: Borrowing[]) => {
      this.borrowings = borrowings;
    });
  }

  selectBorrowingToUpdate(borrowingId: number): void {
    this.router.navigate(['borrowing', borrowingId]);
  }

  deleteBorrowing(borrowingId: number): void {
    this.borrowingService.deleteBorrowing(borrowingId).subscribe(() => {
      console.log('Pôžička bola úspešne zmazaná.');
      this.getBorrowings();
    });
  }
}
