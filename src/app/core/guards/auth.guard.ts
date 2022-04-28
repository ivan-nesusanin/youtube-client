import { Injectable } from '@angular/core';
import { CanLoad, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanLoad {
  public isAuth!: boolean;

  constructor(private authService: AuthService, private router: Router) {}

  canLoad(): boolean | Observable<boolean> | Promise<boolean> {
    this.authService.isAuth$.subscribe(res => this.isAuth = res);
    if (this.isAuth) {
      return true;
    } else {
      this.router.navigate(['/auth']);
      return false;
    }
  }

  canActivate(): boolean | Observable<boolean> | Promise<boolean> {
    this.authService.isAuth$.subscribe(res => this.isAuth = res);
    if (this.isAuth) {
      return true;
    } else {
      this.router.navigate(['/auth']);
      return false;
    }
  }
}

