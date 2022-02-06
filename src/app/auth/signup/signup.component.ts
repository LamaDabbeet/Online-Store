import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent {
  signUpForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
  });
  constructor(
    private authService: AuthService,
    private fb: FormBuilder,
    private router: Router,
    private _snackBar: MatSnackBar
  ) {}

  signUp() {
    if (!this.signUpForm.valid) return;

    const email = this.signUpForm.value.email;
    const password = this.signUpForm.value.password;
    this.authService
      .signUp(email, password)
      .then(() => {
        this._snackBar.open(
          'Your account has been created successfully',
          'Dismiss',
          { duration: 1500 }
        );
        this.router.navigate(['/login']);
      })
      .catch((e) => {
        console.log(e.message);
        this._snackBar.open('Error', e.message, { duration: -1 });
      });
  }
}
