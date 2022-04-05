import { Component, Input, OnInit } from '@angular/core';
import { ISearchItem } from '../models/search-item.model';
import { data } from '../../../assets/data';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss'],
})
export class SearchResultComponent implements OnInit{
  public cards: ISearchItem[] = data.items;

  @Input() showSearchBlock!: boolean;

  @Input() click: boolean | undefined;

  ngOnInit(): void {
    console.log(this.click);
  }
}
