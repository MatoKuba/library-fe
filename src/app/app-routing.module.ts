import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UserComponent} from "./user/user.component";
import {BooksComponent} from "./books/books.component";
import {GenreComponent} from "./genre/genre.component";
import {BorrowingsComponent} from "./borrowings/borrowings.component";

const routes: Routes = [
  {
    path: "user",
    component: UserComponent
  },
  {
    path: "books",
    component: BooksComponent
  },
  {
    path: "borrowings",
    component: BorrowingsComponent
  },
  {
    path: "genre",
    component: GenreComponent
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
