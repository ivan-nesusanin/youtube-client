import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BackToSearchPageService {
  public back$ = new Subject<boolean>();

  valueTransmitter(value: boolean) {
    this.back$.next(value);
    console.log(true)
  }
}
