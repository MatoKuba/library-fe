import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Borrowing } from '../../common/model/borrowing.model';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-borrowing-form',
  templateUrl: './borrowing-form.component.html',
  styleUrls: ['./borrowing-form.component.css'],
})
export class BorrowingFormComponent {
  form: FormGroup;
  submitted = false;

  @Input()
  set borrowingData(borrowing: Borrowing | undefined) {
    if (borrowing) {
      this.form.setValue(borrowing);
    }
  }
  @Output() formUpdate = new EventEmitter<Borrowing>();
  @Output() formCreate = new EventEmitter<Borrowing>();
  constructor() {
    this.form = new FormGroup<any>({
      id: new FormControl(null),
      userId: new FormControl(null),
      bookId: new FormControl(null),
      borrowDate: new FormControl(null), // Add this line
      returnDate: new FormControl(null), // Add this line
    });
  }

  submit(): void {
    this.submitted = true;
    if (this.form.valid) {
      if (this.form.controls.id.value) {
        this.formUpdate.emit(this.prepareBorrowing(this.form.controls.id.value));
      } else {
        this.formCreate.emit(this.prepareBorrowing());
      }
      this.form.reset();
    }
  }
  private prepareBorrowing(id?: number): Borrowing {
    return {
      id: id !== undefined ? id : Date.now(),
      userId: this.form.controls.userId.value,
      bookId: this.form.controls.bookId.value,
      borrowDate: this.form.controls.borrowDate.value,
      returnDate: this.form.controls.returnDate.value,
    };
  }
}
