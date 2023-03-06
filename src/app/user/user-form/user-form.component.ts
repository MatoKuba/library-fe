import {Component, EventEmitter, Output, Input} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {User} from "../../model/user.model";


@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent {

  form: FormGroup;

  @Input()
  set userData(user: User | undefined) {
    if (user) {
      this.form.setValue(user);
    }
  }


  @Output()
  formUpdate = new EventEmitter<User>();

  @Output() formCreate = new EventEmitter<User>();


  saveUser(): void {
    if (this.form.valid) {
      if (this.form.controls.id.value) {
        this.formUpdate.emit(
          this.prepareUser(this.form.controls.id.value));
      } else {
        this.formCreate.emit(this.prepareUser());
      }
      this.form.reset();
    }
  }
  constructor() {
    this.form = new FormGroup({
      id: new FormControl(null),
      name: new FormControl(null, Validators.required),
      author: new FormControl(null, [Validators.required,
        Validators.minLength(3)]),
      available: new FormControl(null)
    })
  }

  private prepareUser(id?: number): User {
    return {
      id: id !== undefined ? id : Date.now(),
      name: this.form.controls.name.value,
      surname: this.form.controls.surname.value};
  }

}
