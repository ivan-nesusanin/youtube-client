import { /* AfterContentChecked, */ Component, Input/* , OnInit */ } from '@angular/core';
import { ISearchItem } from '../../models/search-item.model';
// import { GetDataService } from '../../services/get-data.service';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss'],
})
export class SearchResultComponent /* implements AfterContentChecked  */{
  // public cards: ISearchItem[] = [];

  // constructor(private getDataService: GetDataService) {}

  // ngAfterContentChecked(): void {
  //   this.cards = this.getDataService.searchResult;
  //   console.log(this.cards);
  // }

  @Input() cards: ISearchItem[] = [];

  // @Input() showSearchBlock!: boolean;

  @Input() clickDate: boolean | undefined;

  @Input() clickViews: boolean | undefined;

  @Input()  phrase!: string;
}
