import { Pipe, PipeTransform } from '@angular/core';
import { ISearchItem } from '../search/models/search-item.model';

@Pipe({
  name: 'sortByDate',
})
export class SortByDatePipe implements PipeTransform {

  transform(cards: ISearchItem[], clickDate: boolean | undefined = undefined): ISearchItem[] {
    if (clickDate === true) {
      return cards.sort((a, b) => Date.parse(b.snippet.publishedAt) - Date.parse(a.snippet.publishedAt));
    } else if (clickDate === false) {
      return cards.sort((a, b) => Date.parse(a.snippet.publishedAt) - Date.parse(b.snippet.publishedAt));
    } else {
      return cards;
    }
  }
}
