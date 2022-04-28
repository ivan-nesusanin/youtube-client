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
  public name = '';

  public buttonName = 'Login';

  public isAuth!: boolean;

  public subLogin!: Subscription;

  public subIsAuth!: Subscription;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.subLogin = this.authService.login$.subscribe(value => {
      this.name = value;
    });
    this.subIsAuth = this.authService.isAuth$.subscribe(value => {
      this.isAuth = value;
      if (this.isAuth) {
        this.buttonName = 'Logout';
      }
    });
  }

  goToRegister(): void {
    localStorage.clear();
    this.router.navigate(['/auth']);
    this.buttonName = 'Login';
  }

  ngOnDestroy(): void {
    this.subLogin.unsubscribe();
    this.subIsAuth.unsubscribe();
  }
}
