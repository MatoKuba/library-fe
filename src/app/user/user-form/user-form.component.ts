
import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {User} from '../../common/model/user.model';


@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent {

  @Input()
  set personData(person: User | undefined) {
    if (person) {
      this.form.setValue(person);
    }
  }

  @Output()
  formCreate = new EventEmitter<User>();

  @Output()
  formUpdate = new EventEmitter<User>();


  form: FormGroup;
  submitted = false;

  constructor() {
    this.form = new FormGroup({
      id: new FormControl(null),
      firstName: new FormControl(null, Validators.required),
      lastName: new FormControl(null, [Validators.required, Validators.minLength(3)])
    })
  }

  savePerson(): void {
    if (this.form.valid) {
      if (this.form.controls.id.value) {
        this.formUpdate.emit(this.prepareUser(this.form.controls.id.value));
      }
    }
  }

  submit(): void {
    this.submitted = true;
    if (this.form.valid) {
      if (this.form.controls.id.value) {
        this.formUpdate.emit(this.prepareUser(this.form.controls.id.value));
      } else {
        this.formCreate.emit(this.prepareUser());
      }
      this.form.reset();
    }
  }

  private prepareUser(id?: number): User {
    return {
      id: id !== undefined ? id : Date.now(),
      firstName: this.form.controls.firstName.value,
      lastName: this.form.controls.lastName.value,
    };
  }
}
