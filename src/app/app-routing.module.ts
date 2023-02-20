import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {UserComponent} from "./user/user.component";
import {RouterModule, Routes} from "@angular/router";
import {BookComponent} from "./book/book.component";

const routes: Routes = [
  {
    path: "users",
    component: UserComponent
  },
  {
    path: "book",
    component: BookComponent
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
