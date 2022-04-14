import { Pipe, PipeTransform } from '@angular/core';
import { ISearchItem } from '../models/search-item.model';

@Pipe({
  name: 'sortByViews',
})
export class SortByViewsPipe implements PipeTransform {

  transform(cards: ISearchItem[], clickViews: boolean | undefined): ISearchItem[] {
    if (clickViews === true) {
      return cards.sort((a, b) => +a.statistics.viewCount - (+b.statistics.viewCount));
    } else if (clickViews === false) {
      return cards.sort((a, b) => +b.statistics.viewCount - (+a.statistics.viewCount));
    } else {
      return cards;
    }
  }

}
