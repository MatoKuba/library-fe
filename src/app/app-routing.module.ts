import { NgModule } from '@angular/core';
import {UserComponent} from "./user/user.component";
import {RouterModule, Routes} from "@angular/router";
import {BookComponent} from "./book/book.component";
import {BorrowingComponent} from "./borrowing/borrowing.component";

const routes: Routes = [
  {
    path: "user",
    component: UserComponent
  },
  {
    path: "book",
    component: BookComponent
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