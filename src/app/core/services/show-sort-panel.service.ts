import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ShowSortPanelService {
  public showPanel$ = new BehaviorSubject<boolean>(true);

  public showSortPanel(value: boolean): void {
    this.showPanel$.next(value);
  }
}
