import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public login$ = new BehaviorSubject<string>('Your Name');

  public isAuth$ = new BehaviorSubject<boolean>(false);

  login(value: string, isAuth: boolean): void {
    localStorage.setItem('login', value);
    localStorage.setItem('isAuth', isAuth.toString());
    this.login$.next(value);
    this.isAuth$.next(isAuth);
  }

  logout(isAuth: boolean): void {
    localStorage.removeItem('login');
    localStorage.removeItem('isAuth');
    this.isAuth$.next(isAuth);
  }
}
