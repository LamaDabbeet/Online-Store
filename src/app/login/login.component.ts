import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';

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
  constructor(private authService: AuthService, private fb: FormBuilder) {}

  login() {
    if (!this.loginForm.valid) return;
    const email = this.loginForm.value.email;
    const password = this.loginForm.value.password;
    this.authService.SignIn(email, password);
  }
}
