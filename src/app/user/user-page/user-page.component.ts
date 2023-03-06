import {Component} from '@angular/core';
import {User} from '../../model/user.model';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent {

  persons: Array<User> = [];

  person?: User;

  createPerson(person: User): void {
    this.persons.push(person);
  }

  updatePerson(person: User): void {
    const index = this.persons.findIndex(person => person.id === person.id);
    if (index !== -1) {
      this.persons[index] = person;
      this.person = undefined;
    }
  }

  selectPersonToUpdate(personId: number): void {
    this.person = this.persons.find(person => person.id === personId);
  }

  deletePerson(personId: number): void {
    const index = this.persons.findIndex(person => person.id === personId);
    if (index !== -1) { this.persons.splice(index, 1); }
  }
}