import { NgModule } from '@angular/core';
import {UserComponent} from "./user/user.component";
import {RouterModule, Routes} from "@angular/router";
import {BooksComponent} from "./book/book.component";
import {BorrowingPageComponent} from "./borrowing/borrowing-page/borrowing-page.component";
import {BorrowingComponent} from "./borrowing/borrowing.component";
import {BookPageComponent} from "./book/book-page/book-page.component";

const routes: Routes = [
  {
    path: "user",
    component: UserComponent
  },
  {
    path: "book",
    component: BookPageComponent,
  },
  {
    path: "borrowing",
    component: BorrowingPageComponent
  }
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
