import { Component } from '@angular/core';
import {Book} from "../model/book.model";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BooksComponent {
  form: FormGroup;
  books: Array<Book> = [];

  constructor() {
    this.form = new FormGroup({
      name: new FormControl(null, Validators.required),
      author: new FormControl(null, [Validators.required,
        Validators.minLength(3)]),
      available: new FormControl(null)
    })
  }

  saveBook(): void {
    this.books.push(this.form.value);
    this.form.reset();
  }

  editBook(index: number):void {
    this.form.setValue(this.books[index]);
    this.deleteBook(index);
  }

  deleteBook(index: number):void{
    this.books.splice(index,1);
  }
}
