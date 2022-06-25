import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { tap, Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): Observable<boolean> {
    return this.authService.isAuth$.asObservable().pipe(
      tap((isAuth) => {
        if (!isAuth) {
          this.router.navigate(['/auth']);
        }
      })
    );
  }
}
