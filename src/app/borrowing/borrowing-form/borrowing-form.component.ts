import { Component, Input, Output, EventEmitter } from '@angular/core';
import {Borrowing} from "../../model/borrowings.model";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-borrowing-form',
  templateUrl: './borrowing-form.component.html',
})
export class BorrowingFormComponent {
  @Input() set borrowingData(borrowing: Borrowing | undefined) {
    if(borrowing){
      this.formGroup.setValue(borrowing)
    }
  }
  @Output() formUpdate = new EventEmitter<Borrowing>();
  @Output() formCreate = new EventEmitter<Borrowing>();
  formGroup: FormGroup;
  constructor() {
    this.formGroup = new FormGroup<any>({
      borrowingId: new FormControl(null),
      borrowingUserId: new FormControl(null),
      borrowingBookId: new FormControl(null)
    })
  }

  submit():void{
    if(this.formGroup.valid) {
      this.formUpdate.emit(this.formGroup.value);
      console.log(this.formGroup.value)
      this.formGroup.reset();
    }
  }
}
