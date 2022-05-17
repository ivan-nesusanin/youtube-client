import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  public name!: string | null;

  public isAuth!: boolean;

  public subLogin!: Subscription;

  public subIsAuth!: Subscription;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    if (localStorage.getItem('login') === null) {
      this.subLogin = this.authService.login$.subscribe(
        (value) => (this.name = value)
      );
      this.subIsAuth = this.authService.isAuth$.subscribe(
        (value) => (this.isAuth = value)
      );
    } else {
      this.name = localStorage.getItem('login');
      this.isAuth = Boolean(localStorage.getItem('isAuth'));
    }
  }

  goToRegister(): void {
    localStorage.clear();
    this.router.navigate(['/auth']);
    this.isAuth = false;
    this.name = 'Your Name';
  }

  ngOnDestroy(): void {
    this.subLogin.unsubscribe();
    this.subIsAuth.unsubscribe();
  }
}
