import { Pipe, PipeTransform } from '@angular/core';
import { IStatisticsResponse } from '../models/statistics.model';

@Pipe({
  name: 'sortByViews',
})
export class SortByViewsPipe implements PipeTransform {
  transform(
    cards: IStatisticsResponse[],
    clickViews: boolean | undefined
  ): IStatisticsResponse[] {
    if (clickViews === true) {
      return cards.sort(
        (a, b) =>
          +a?.items[0]?.statistics.viewCount -
          +b?.items[0]?.statistics.viewCount
      );
    } else if (clickViews === false) {
      return cards.sort(
        (a, b) =>
          +b?.items[0]?.statistics.viewCount -
          +a?.items[0]?.statistics.viewCount
      );
    } else {
      return cards;
    }
  }
}
