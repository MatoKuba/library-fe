import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserPageComponent } from './user/user-page/user-page.component';
import { UserFormComponent } from './user/user-form/user-form.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { BookFormComponent } from './book/book-form/book-form.component';
import { BookListComponent } from './book/book-list/book-list.component';
import { BookPageComponent } from './book/book-page/book-page.component';
import {HttpClientModule} from '@angular/common/http';
import {UserService} from './common/service/user.service';
import {BookService} from './common/service/book.service';
import {BorrowingPageComponent} from "./borrowing/borrowing-page/borrowing-page.component";
import {BorrowingFormComponent} from "./borrowing/borrowing-form/borrowing-form.component";
import {BorrowingListComponent} from "./borrowing/borrowing-list/borrowing-list.component";
import {BorrowingService} from "./common/service/borrowing.service";
import {AngularToastifyModule, ToastService} from 'angular-toastify';
import { UserDetailPageComponent } from './user/user-detail-page/user-detail-page.component';
import { BorrowingDetailPageComponent } from './borrowing/borrowing-detail-page/borrowing-detail-page.component'

@NgModule({
  declarations: [
    AppComponent,
    UserPageComponent,
    UserFormComponent,
    UserListComponent,
    BorrowingPageComponent,
    BorrowingFormComponent,
    BorrowingListComponent,
    BookFormComponent,
    BookListComponent,
    BookPageComponent,
    UserDetailPageComponent,
    BorrowingDetailPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatButtonModule,
    AppRoutingModule,
    HttpClientModule,
    AngularToastifyModule
  ],
  providers: [
    UserService,
    BookService,
    BorrowingService,
    ToastService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
