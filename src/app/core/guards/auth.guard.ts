import { Injectable } from '@angular/core';
import { CanLoad, Route, Router } from '@angular/router';
import { AuthService } from '@data/app/auth/services/auth.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanLoad {

  constructor(private authService: AuthService, private router: Router) {}

  canLoad(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    route: Route,
  ): boolean | Observable<boolean> | Promise<boolean> {
    if (this.authService.isAuth) {
      return true;
    } else {
      this.router.navigate(['/auth']);
      return false;
    }
  }
}

