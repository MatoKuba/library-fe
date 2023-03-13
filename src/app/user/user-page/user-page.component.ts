import {Component} from '@angular/core';
import {User} from '../../common/model/user.model';
import {UserService} from '../../common/service/user.service';
import {untilDestroyed} from "@ngneat/until-destroy";
import {ToastService} from "angular-toastify";
import {Router} from "@angular/router";

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent {

  persons: Array<User> = [];

  person?: User;

  constructor(private service: UserService, private toastService: ToastService, private router: Router) {
    this.getPersons();
  }

  getPersons(): void {
    this.service.getUsers().subscribe((persons: User[]) => {
        this.persons = persons;
    })
  }

  selectPersonToUpdate(personId: number): void {
    this.router.navigate(['user', personId]);
  }

  deletePerson(personId: number): void {
    if(window.confirm("Naozaj chcete vymazat osobu?")) {
      this.service.deleteUser(personId).pipe(untilDestroyed(this)).subscribe(() => {
        this.toastService.success('Osoba bola úspešne zmazaná.');
        this.getPersons();
      }, ()=>{
        this.toastService.error('Chyba. Osoba nebola zmazaná.');
      })
    }
  }
}
