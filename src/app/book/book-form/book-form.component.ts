import {Component, EventEmitter, Output, Input} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Book} from '../../common/model/book.model';



@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.css']
})
export class BookFormComponent {

  form: FormGroup;
  submitted = false;

  @Input()
  set bookData(book: Book | undefined) {
    if (book) {
      this.form.setValue(book);
    }
  }


  @Output()
  formUpdate = new EventEmitter<Book>();

  @Output() formCreate = new EventEmitter<Book>();


  saveBook(): void {
    if (this.form.valid) {
      if (this.form.controls.id.value) {
        this.formUpdate.emit(
          this.prepareBook(this.form.controls.id.value));
      } else {
        this.formCreate.emit(this.prepareBook());
      }
      this.form.reset();
    }
  }
  constructor() {
    this.form = new FormGroup({
      id: new FormControl(null),
      name: new FormControl(null, Validators.required),
      authorFirstName: new FormControl(null, [Validators.required,
        Validators.minLength(3)]),
      authorLastName: new FormControl(null, [Validators.required,
        Validators.minLength(3)]),
      isbn: new FormControl(null, Validators.required),
      count: new FormControl(null, Validators.required),
      available: new FormControl(null)
    })
  }
  submit(): void {
    this.submitted = true;
    if (this.form.valid) {
      if (this.form.controls.id.value) {
        this.formUpdate.emit(this.prepareBook(this.form.controls.id.value));
      } else {
        this.formCreate.emit(this.prepareBook());
      }
      this.form.reset();
    }
  }
  private prepareBook(id?: number): Book {
    return {
      id: id !== undefined ? id : Date.now(),
      name: this.form.controls.name.value,
      authorFirstName: this.form.controls.authorFirstName.value,
      authorLastName: this.form.controls.authorLastName.value,
      isbn: this.form.controls.isbn.value,
      count: this.form.controls.count.value,
      available: this.form.controls.available.value};
  }

}
