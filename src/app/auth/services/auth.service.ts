import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  public login$ = new Subject<string>();

  login(value: string): void {
    localStorage.setItem('login', value);
    localStorage.setItem('token', 'true');
    this.login$.next(value);
  }
}
