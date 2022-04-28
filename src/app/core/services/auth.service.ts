import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  public login$ = new BehaviorSubject<string>('Your Name');

  public isAuth$ = new BehaviorSubject<boolean>(false);
  // public isAuth = false;

  login(value: string, isAuth: boolean): void {
    localStorage.setItem('login', value);
    localStorage.setItem('token', 'true');
    this.login$.next(value);
    // return this.isAuth = true;
    this.isAuth$.next(isAuth);
  }
}
