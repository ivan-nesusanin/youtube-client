import { Component, Input, OnInit } from '@angular/core';
import { ISearchItem } from '../../models/search-item.model';

@Component({
  selector: 'app-color-label',
  templateUrl: './color-label.component.html',
  styleUrls: ['./color-label.component.scss'],
})
export class ColorLabelComponent implements OnInit {

  @Input()
    card?: ISearchItem;

  baseDate = '';

  ngOnInit() {
    this.baseDate = this.card!.snippet.publishedAt;
  }

}
