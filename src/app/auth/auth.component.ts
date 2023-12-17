import { Component } from '@angular/core';
import {MatCardModule} from "@angular/material/card";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {FormControl, ReactiveFormsModule, Validators} from "@angular/forms";
import {NgIf, NgSwitch, NgSwitchCase} from "@angular/common";

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    NgIf,
    NgSwitch,
    NgSwitchCase
  ],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css'
})
export class AuthComponent {
  viewType = "login";
  email = new FormControl('', [Validators.required, Validators.email]);
  emailRegister = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required]);
  passwordRegister = new FormControl('', [Validators.required]);
  username = new FormControl('', [Validators.required])
  confirmPassword = new FormControl('', [Validators.required])

  onSwitchViewType(viewType: string) {
    this.viewType = viewType;
  }

  getErrorEmailMessage(email: FormControl) {
    if (email.hasError('required')) {
      return 'You must enter a value';
    }

    return email.hasError('email') ? 'Not a valid email' : '';
  }

  getErrorPasswordMessage(password: FormControl) {
    if (password.hasError('required')) {
      return 'You must enter a value';
    }

    return password.hasError('password') ? 'Not a valid password' : '';
  }

  getErrorUsernameMessage() {
    if (this.username.hasError('required')) {
      return 'You must enter a value';
    }

    return '';
  }

  getErrorConfirmPasswordMessage() {
    if (this.confirmPassword.hasError('required')) {
      return 'You must enter a value';
    }

    return this.confirmPassword.hasError('password') ? 'Not a valid password' : '';
  }

  onLogIn() {
    if (this.email.valid && this.password.valid) {
      alert("valid");
    }
  }
}