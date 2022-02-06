import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../../services/auth.service';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  count$: Observable<number> | undefined;
  subTotal$: Observable<number> | undefined;

  constructor(
    private authService: AuthService,
    private cartService: CartService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.count$ = this.cartService.getCount();
    this.subTotal$ = this.cartService.getSubTotal();
  }
  logOut() {
    this.authService
      .signOut()
      .then(() => this.router.navigate(['/']))
      .catch((e) => console.log(e.message));
  }
}
