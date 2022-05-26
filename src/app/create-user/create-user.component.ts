import { Component, OnInit } from '@angular/core';

import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  createUserForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(5)]),
    role: new FormControl('', [Validators.required]),
    status: new FormControl('', [Validators.required]),
  })

  createUser() {
    console.log(this.createUserForm.value)
  };

  get nameValidator() {                       // Function to apply Validations
    return this.createUserForm.get('name')
  }

  get emailValidator() {
    return this.createUserForm.get('email');
  }

  get passwordValidator() {
    return this.createUserForm.get('password')
  }

}
