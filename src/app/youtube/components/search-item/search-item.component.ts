import { Component, Input, OnInit } from '@angular/core';
import { ISearchItem } from '../../models/search-item.model';
import { GetDataService } from '../../services/get-data.service';

@Component({
  selector: 'app-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.scss'],
})
export class SearchItemComponent implements OnInit{

  @Input()
    card!: ISearchItem;

  baseDate = '';

  constructor(public getDataService: GetDataService) { }

  ngOnInit() {
    this.baseDate = this.card.snippet.publishedAt;
  }

}
