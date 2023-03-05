import { Component, Input, Output, EventEmitter } from '@angular/core';
import {Borrowing} from "../../model/borrowings.model";

@Component({
  selector: 'app-borrowing-list',
  templateUrl: './borrowing-list.component.html',
})
export class BorrowingListComponent {
  @Input() borrowings: Borrowing[] = [];
  @Output() deleteBorrowing = new EventEmitter<string>();
  @Output() setEditBorrowing = new EventEmitter<Borrowing>();
}
