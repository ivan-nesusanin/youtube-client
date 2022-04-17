import { Injectable } from '@angular/core';
import { data } from '@data/assets/data';
import { Subject } from 'rxjs';
import { ISearchItem } from '../models/search-item.model';

@Injectable({
  providedIn: 'root',
})
export class GetDataService {

  public cards: ISearchItem[] = data.items;

  public cardInfo?: ISearchItem;

  public info$ = new Subject<ISearchItem>();

  getCardInfo(id: string): void {
    this.cardInfo = this.cards.find(item => item.id === id);
    this.info$.next(this.cardInfo!);
  }
}
