import { Component } from '@angular/core';
import { ISearchResponse } from '../models/search-response.model';
import { data } from '../../../assets/data';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss'],
})
export class SearchResultComponent {
  public response: ISearchResponse = data.items;

}
