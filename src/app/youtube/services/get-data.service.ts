import { Injectable } from '@angular/core';
import { data } from '@data/assets/data';
import { ISearchItem } from '../models/search-item.model';

@Injectable({
  providedIn: 'root',
})
export class GetDataService {

  public cards: ISearchItem[] = data.items;

}
