import { Component, Input } from '@angular/core';
import { ISearchItem } from '../../models/search-item.model';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss'],
})
export class SearchResultComponent {
  @Input() cards!: ISearchItem[];

  @Input() clickDate: boolean | undefined;

  @Input() clickViews: boolean | undefined;

  @Input() phrase!: string;
}
