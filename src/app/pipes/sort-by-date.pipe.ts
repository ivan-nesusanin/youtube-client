import { Pipe, PipeTransform } from '@angular/core';
import { ISearchItem } from '../search/models/search-item.model';

@Pipe({
  name: 'sortByDatePipe',
})
export class SortByDatePipePipe implements PipeTransform {

  transform(cards: ISearchItem[], click: boolean | undefined = undefined): ISearchItem[] {
    if (click === true) {
      return cards.sort((a, b) => Date.parse(a.snippet.publishedAt) - Date.parse(b.snippet.publishedAt));
    } else if (click === false) {
      return cards.sort((a, b) => Date.parse(b.snippet.publishedAt) - Date.parse(a.snippet.publishedAt));
    } else {
      return cards;
    }
  }
}
