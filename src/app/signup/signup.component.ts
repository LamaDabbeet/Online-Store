import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';

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
  constructor(private authService: AuthService, private fb: FormBuilder) {}

  signUp() {
    if (!this.signUpForm.valid) return;

    const email = this.signUpForm.value.email;
    const password = this.signUpForm.value.password;
    this.authService.SignUp(email, password).then((res) => {});
  }
}
