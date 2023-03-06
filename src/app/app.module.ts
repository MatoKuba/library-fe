import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookFormComponent } from './book/book-form/book-form.component';
import { BookListComponent } from './book/book-list/book-list.component';
import { BookPageComponent } from './book/book-page/book-page.component';
import { BorrowingFormComponent } from './borrowing/borrowing-form/borrowing-form.component';
import { BorrowingListComponent } from './borrowing/borrowing-list/borrowing-list.component';
import { BorrowingPageComponent } from './borrowing/borrowing-page/borrowing-page.component';
import { UserFormComponent } from './user/user-form/user-form.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { UserPageComponent } from './user/user-page/user-page.component';

@NgModule({
  declarations: [
    AppComponent,
    BookFormComponent,
    BookListComponent,
    BookPageComponent,
    BorrowingFormComponent,
    BorrowingListComponent,
    BorrowingPageComponent,
    UserFormComponent,
    UserListComponent,
    UserPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatButtonModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
