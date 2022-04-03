import { Component } from '@angular/core';
import { ISearchItem } from '../models/search-item.model';
import { data } from '../../../assets/data';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss'],
})
export class SearchResultComponent {
  public cards: ISearchItem[] = data.items;

}
