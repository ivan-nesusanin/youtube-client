import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { ISearchItem } from '../models/search-item.model';
import { ISearchResponse } from '../models/search-response.model';
import { IStatisticsResponse } from '../models/statistics.model';

@Injectable({
  providedIn: 'root',
})
export class GetDataService {
  public searchVideo$ = new BehaviorSubject<ISearchItem[]>([]);

  constructor(private http: HttpClient) {}

  public getVideos(value?: string): Observable<ISearchResponse> {
    return this.http
      .get<ISearchResponse>(`search?part=snippet&q=${value}&type=video`)
      .pipe(
        tap((item: ISearchResponse) => {
          this.searchVideo$.next(item.items);
        })
      );
  }

  public getStatistics(id: string): Observable<IStatisticsResponse> {
    return this.http.get<IStatisticsResponse>(
      `videos?part=statistics&id=${id}`
    );
  }
}
