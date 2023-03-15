import { Component } from '@angular/core';
import {Borrowing} from "../../common/model/borrowing.model";
import {ActivatedRoute, Router} from "@angular/router";
import {BorrowingService} from "../../common/service/borrowing.service";
import {ToastService} from "angular-toastify";
import {untilDestroyed} from "@ngneat/until-destroy";

@Component({
  selector: 'app-borrowing-detail-page',
  templateUrl: './borrowing-detail-page.component.html',
  styleUrls: ['./borrowing-detail-page.component.css']
})
export class BorrowingDetailPageComponent {
  borrow?: Borrowing;

  private borrowId: number | null;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private borrowingService: BorrowingService,
              private toastService: ToastService) {
    this.borrowId = Number(route.snapshot.paramMap.get('borrowingId'));
    this.getBorrowings();
  }
  getBorrowings(): void {
    if (this.borrowId) {
      this.borrowingService.getBorrowing(this.borrowId).pipe(untilDestroyed(this)).subscribe((borrow: Borrowing) => {
        this.borrow = borrow;
      });
    }
  }

  updateBorrowing(borrow: Borrowing): void {
    this.borrowingService.updateBorrowing(borrow).pipe(untilDestroyed(this)).subscribe(() => {
      this.toastService.success("Vypozicka bola zmenena");
    }, ()=>{this.toastService.error("Vypozicka nebola zmenena");})
  }

}
