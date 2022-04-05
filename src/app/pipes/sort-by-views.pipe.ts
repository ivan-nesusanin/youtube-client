import { Pipe, PipeTransform } from '@angular/core';
import { ISearchItem } from '../search/models/search-item.model';

@Pipe({
  name: 'sortByViews',
})
export class SortByViewsPipe implements PipeTransform {

  transform(cards: ISearchItem[], clickViews: boolean | undefined = undefined): ISearchItem[] {
    if (clickViews === true) {
      return cards.sort((a, b) => Date.parse(a.statistics.viewCount) - Date.parse(b.statistics.viewCount));
    } else if (clickViews === false) {
      return cards.sort((a, b) => Date.parse(b.statistics.viewCount) - Date.parse(a.statistics.viewCount));
    } else {
      return cards;
    }
  }

}
