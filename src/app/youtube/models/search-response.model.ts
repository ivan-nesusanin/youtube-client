import { ISearchItem } from './search-item.model';

export interface ISearchResponse {
  etag: string;
  items: ISearchItem[];
  kind: string;
  nextPageToken: string;
  pageInfo: IPageInfoItem;
  regionCode: string;
}

export interface IPageInfoItem {
  totalResults: number;
  resultsPerPage: number;
}
