import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
  });
  constructor(
    private authService: AuthService,
    private fb: FormBuilder,
    private router: Router,
    private _snackBar: MatSnackBar
  ) {}

  login() {
    if (!this.loginForm.valid) return;
    const email = this.loginForm.value.email;
    const password = this.loginForm.value.password;
    this.authService
      .signIn(email, password)
      .then(() => {
        this._snackBar.open('success', 'Dismiss', { duration: 1500 });
        this.router.navigate(['/store']);
      })
      .catch((e) => {
        this._snackBar.open(
          'An error has ocurred,please try again',
          'Dismiss',
          { duration: -1 }
        );
        console.log(e.message);
      });
  }
}
