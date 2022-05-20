import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  public name!: string | null;

  public isAuth = false;

  public subLogin = this.authService.login$.subscribe(
    (value) => (this.name = value)
  );

  public subIsAuth = this.authService.isAuth$.subscribe(
    (value) => (this.isAuth = value)
  );

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    if (localStorage.getItem('login') !== null) {
      this.name = localStorage.getItem('login');
      this.isAuth = Boolean(localStorage.getItem('isAuth'));
    }
  }

  goToRegister(): void {
    localStorage.removeItem('login');
    localStorage.removeItem('isAuth');
    this.router.navigate(['/auth']);
    this.isAuth = false;
  }

  ngOnDestroy(): void {
    if (this.subLogin) {
      this.subLogin.unsubscribe();
    }
    if (this.subIsAuth) {
      this.subIsAuth.unsubscribe();
    }
  }
}
