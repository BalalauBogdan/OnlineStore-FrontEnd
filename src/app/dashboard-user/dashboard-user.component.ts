import { Component } from '@angular/core';
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatToolbarModule} from "@angular/material/toolbar";
import {Router} from "@angular/router";
import {MatCardModule} from "@angular/material/card";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {NgIf, NgSwitchCase} from "@angular/common";
import {FormControl, ReactiveFormsModule, Validators} from "@angular/forms";
import {UserService} from "../services/user.service";

@Component({
  selector: 'app-dashboard-user',
  standalone: true,
  imports: [
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatToolbarModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    NgIf,
    NgSwitchCase,
    ReactiveFormsModule
  ],
  templateUrl: './dashboard-user.component.html',
  styleUrl: './dashboard-user.component.css'
})
export class DashboardUserComponent {

  hide = true;

  username = new FormControl(this.userService.getUser().username, [Validators.required]);
  email = new FormControl(this.userService.getUser().email, [Validators.required, Validators.email]);
  password = new FormControl(this.userService.getUser().password, [Validators.required]);

  constructor(private router: Router, private userService: UserService) { }

  getErrorUsernameMessage() {
    if (this.username.hasError('required')) {
      return 'You must enter a value';
    }

    return '';
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

  onChangePage(page: String) {
    this.router.navigate(["/", page]);
  }

  onUpdate() {
    if (this.username.valid && this.email.valid && this.password.valid) {
      this.userService.updateUser(this.userService.getUser().id, this.username.getRawValue()!, this.email.getRawValue()!, this.password.getRawValue()!)
        .subscribe((response: any) => {
          console.log(response);
        });
    }
  }

  onDelete() {
    this.userService.deleteUser(this.userService.getUser().id).subscribe((response: any) => {
      console.log(response);
    });
    this.onChangePage('auth');
  }
}
