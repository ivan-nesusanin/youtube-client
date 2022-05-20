import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public login$ = new Subject<string>();

  public isAuth$ = new Subject<boolean>();

  login(value: string, isAuth: boolean): void {
    localStorage.setItem('login', value);
    localStorage.setItem('isAuth', isAuth.toString());
    this.login$.next(value);
    this.isAuth$.next(isAuth);
  }
}
