import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  public login$ = new Subject<string>();

  public isAuth = false;

  login(value: string): boolean {
    localStorage.setItem('login', value);
    localStorage.setItem('token', 'true');
    this.login$.next(value);
    return this.isAuth = true;
  }
}
