import {Component} from '@angular/core';
import {User} from "./model/user.model";
import {Book} from "./model/book.model";
import {Borrowing} from "./model/borrowings.model";


export enum Menu {
  BOOKS = 'BOOKS',
  USERS = 'USERS',
  BORROWINGS = 'BORROWINGS'
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  menu = Menu;
  actualMenu = Menu.USERS;




  changeMenu(menuItem: Menu): void {
    this.actualMenu = menuItem;
  }
}
