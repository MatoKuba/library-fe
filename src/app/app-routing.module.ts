import { NgModule } from '@angular/core';
import {UserComponent} from "./user/user.component";
import {RouterModule, Routes} from "@angular/router";
import {BooksComponent} from "./book/book.component";
import {BorrowingComponent} from "./borrowing/borrowing.component";

const routes: Routes = [
  {
    path: "user",
    component: UserComponent
  },
  {
    path: "book",
    component: BooksComponent
  },
  {
    path: "borrowing",
    component: BorrowingComponent
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
