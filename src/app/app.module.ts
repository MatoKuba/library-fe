import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { BooksComponent } from './book/book.component';
import { BorrowingPageComponent } from './borrowing/borrowing-page/borrowing-page.component';
import { BorrowingListComponent } from './borrowing/borrowing-list/borrowing-list.component';
import { BorrowingFormComponent } from './borrowing/borrowing-form/borrowing-form.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    BooksComponent,
    BorrowingPageComponent,
    BorrowingListComponent,
    BorrowingFormComponent
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
