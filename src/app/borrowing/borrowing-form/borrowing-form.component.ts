import { Component, Input, Output, EventEmitter } from '@angular/core';
import {Borrowing} from "../../model/borrowings.model";

@Component({
  selector: 'app-borrowing-form',
  templateUrl: './borrowing-form.component.html',
})
export class BorrowingFormComponent {
  @Input() borrowingId = '';
  @Input() borrowingBook = '';
  @Input() borrowingUser = '';
  @Input() editBorrowing: Borrowing | null = null;
  @Output() addOrUpdateBorrowing = new EventEmitter<void>();
}
