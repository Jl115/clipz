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

  email = new FormControl('', [
    Validators.required,
    Validators.email
  ]);
  password = new FormControl('', [
    Validators.required,
    Validators.minLength(8),
    Validators.maxLength(30),
    Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-])[a-zA-Z0-9!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]{8,}$'
    ),
  ]);
  confirm_password = new FormControl('', [
    Validators.required
  ]);
  age = new FormControl('', [
    Validators.required,
    Validators.min(16),
    Validators.max(100),
  ]);
  phoneNumber = new FormControl('');

  registerForm = new FormGroup({
    name: this.name,
    email: this.email,
    password: this.password,
    confirm_password: this.confirm_password,
    age: this.age,
    phoneNumber: this.phoneNumber,
  });
}
