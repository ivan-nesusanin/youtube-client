import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, switchMap } from 'rxjs';
import { ISearchItem, IStatisticsItem } from '../models/search-item.model';
import { ISearchResponse } from '../models/search-response.model';

@Injectable({
  providedIn: 'root',
})
export class GetDataService {
  public searchResult!: ISearchResponse;

  public arrIds!: string[];

  constructor(private http: HttpClient) {}

  public getData(value: string): Observable<any> {
    return this.http
      .get<ISearchResponse>(`search?part=snippet&q=${value}`)
      .pipe(
        switchMap(
          (item: ISearchResponse) =>
            (this.arrIds = item.items.map((el: ISearchItem) => el.id.videoId)),
        ),
        // this.arrIds.map((elem: string) => this.http.get<IStatisticsItem>(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${elem}&key=AIzaSyAPpc7I6b_9vRxlNmKhigQSWTWCWzhq9PU`))
      )
  }
}
