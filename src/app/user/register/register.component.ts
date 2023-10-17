import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  name = new FormControl('', [
    Validators.required,
    Validators.minLength(3),
    Validators.maxLength(30),
    Validators.pattern('^[a-zA-Z ]*$'),
  ]);

  email = new FormControl('');
  password = new FormControl('');
  confirlm_password = new FormControl('');
  age = new FormControl('');
  phoneNumber = new FormControl('');

  registerForm = new FormGroup({
    name: this.name,
    email: this.email,
    password: this.password,
    confirlm_password: this.confirlm_password,
    age: this.age,
    phoneNumber: this.phoneNumber,
  });
}
