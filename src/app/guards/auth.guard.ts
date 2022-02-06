import { Injectable } from '@angular/core';
import { RouterStateSnapshot, CanActivate, Router } from '@angular/router';
import { getAuth } from 'firebase/auth';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(router: any, state: RouterStateSnapshot) {
    const user = this.authService.user$;

    if (user) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}
