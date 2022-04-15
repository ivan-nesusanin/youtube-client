import { Pipe, PipeTransform } from '@angular/core';
import { ISearchItem } from '../search/models/search-item.model';

@Pipe({
  name: 'filterByWord',
})
export class FilterByWordPipe implements PipeTransform {

  transform(cards: ISearchItem[], phrase: string = ''): ISearchItem[] {
    if (!phrase.trim()) {
      return cards;
    } else {
      return cards.filter((item) => {
        return item.snippet.title.toLowerCase().includes(phrase);
      });
    }
  }

}
