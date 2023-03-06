import { Component } from '@angular/core';
import {User} from "../model/user.model";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  userId = "";
  userName = '';
  userContact = '';
  users: User[] = [];
  addUser(): void {
    const user: User = {
      id: this.userId,
      name: this.userName,
      contact: this.userContact
    };
    this.users.push(user);

    this.userId = '';
    this.userName = '';
    this.userContact = '';
  }
  deleteUser(id: string): void {
    const index = this.users.findIndex(user => user.id === id);
    if (index !== -1) {
      this.users.splice(index, 1);
    }
  }
}
