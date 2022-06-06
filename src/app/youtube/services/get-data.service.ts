import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, switchMap } from 'rxjs';
import { ISearchItem } from '../models/search-item.model';
import { ISearchResponse } from '../models/search-response.model';

@Injectable({
  providedIn: 'root',
})
export class GetDataService {
  public searchVideo!: ISearchItem[];

  public showPanel$ = new BehaviorSubject<boolean>(true);

  constructor(private http: HttpClient) {}

  public getVideos(value?: string): Observable<ISearchItem> {
    return this.http
      .get<ISearchResponse>(`search?part=snippet&q=${value}&type=video`)
      .pipe(
        switchMap((item: ISearchResponse) => {
          return (this.searchVideo = item.items);
        })
      );
  }

  public getStatistics(id: string): Observable<any> {
    return this.http.get(`videos?part=statistics&id=${id}`);
  }

  public showSortPanel(value: boolean): void {
    this.showPanel$.next(value);
  }
}
