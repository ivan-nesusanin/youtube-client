import { Component, Input } from '@angular/core';
import { ISearchItem } from '../models/search-item.model';
// import { data } from 'src/assets/data';

@Component({
  selector: 'app-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.scss'],
})
export class SearchItemComponent{

  @Input() card!: ISearchItem;

}
