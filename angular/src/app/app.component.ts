import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  borrowingForm: FormGroup;
  borrowingList: any[] = [];
  selectedUser: string = "";
  selectedBook: string = "";
  counter: number = 1;

  constructor(private fb: FormBuilder) {
    this.borrowingForm = this.fb.group({
      borrowing: this.fb.group({
        userId: ['', Validators.required],
        bookId: ['', Validators.required],
      }),
    });
  }

  selectUser(userId: string) {
    this.selectedUser = userId;
    this.borrowingForm.get('borrowing.userId')?.setValue(userId);
  }

  selectBook(bookId: string) {
    this.selectedBook = bookId;
    this.borrowingForm.get('borrowing.bookId')?.setValue(bookId);
  }

  onSubmit() {
    const borrowing = {
      id: this.counter++,
      userId: this.borrowingForm.value.borrowing.userId,
      bookId: this.borrowingForm.value.borrowing.bookId,
    };
    this.borrowingList.push(borrowing);
    this.borrowingForm.reset();
    this.selectedUser = '';
    this.selectedBook = '';
  }
}
