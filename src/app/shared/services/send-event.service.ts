import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SendEventService {
  public clickSearchValue$ = new Subject<boolean>();

  public clickSettingsValue$ = new Subject<boolean>();

  changeSearchClickValue(value: boolean): void {
    this.clickSearchValue$.next(value);
  }

  changeSettingsClickValue(value: boolean): void {
    this.clickSettingsValue$.next(value);
  }
}
