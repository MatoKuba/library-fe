import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {BorrowingPageComponent} from "./borrowing/borrowing-page/borrowing-page.component";
import {UserPageComponent} from './user/user-page/user-page.component';
import {BookPageComponent} from "./book/book-page/book-page.component";
import {UserDetailPageComponent} from "./user/user-detail-page/user-detail-page.component";
import {BorrowingDetailPageComponent} from "./borrowing/borrowing-detail-page/borrowing-detail-page.component";

const routes: Routes = [
  {
    path: "user",
    component: UserPageComponent
  },
  {
    path: 'user/:userId',
    component: UserDetailPageComponent
  },
  {
    path: "book",
    component: BookPageComponent
  },
  {
    path: "borrowing",
    component: BorrowingPageComponent
  },
  {
    path: "borrowing/:borrowingId",
    component: BorrowingDetailPageComponent
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
