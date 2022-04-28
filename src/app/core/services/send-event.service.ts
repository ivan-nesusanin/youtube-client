import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SendEventService {

  public clickSettingsValue$ = new Subject<boolean>();

  changeSettingsClickValue(value: boolean): void {
    this.clickSettingsValue$.next(value);
  }
}
