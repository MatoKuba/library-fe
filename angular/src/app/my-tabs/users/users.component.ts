import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

interface User {
  id: number;
  name: string;
  contact: string;
}

@Component({
  selector: 'app-users',
  template: `
    <form [formGroup]="userForm" (ngSubmit)="onSubmit()">
      <label>
        User ID:
        <input formControlName="id" type="text">
      </label>
      <label>
        Name:
        <input formControlName="name" type="text">
      </label>
      <label>
        Contact:
        <input formControlName="contact" type="text">
      </label>
      <button type="submit">Submit</button>
    </form>

    <ul>
      <li *ngFor="let user of users">
        {{ user.id }} - {{ user.name }} - {{ user.contact }}
      </li>
    </ul>
  `,
})
export class UsersComponent {
  userForm: FormGroup;
  users: User[] = [
    { id: 1, name: 'Alice', contact: 'alice@example.com' },
    { id: 2, name: 'Bob', contact: 'bob@example.com' },
    { id: 3, name: 'Charlie', contact: 'charlie@example.com' },
  ];

  constructor(private fb: FormBuilder) {
    this.userForm = this.fb.group({
      id: ['', Validators.required],
      name: ['', Validators.required],
      contact: ['', Validators.required],
    });
  }

  onSubmit() {
    const user = this.userForm.value;
    this.users.push(user);
    this.userForm.reset();
  }
}
