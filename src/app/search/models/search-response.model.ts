import { ISearchItem } from './search-item.model';

export interface ISearchResponse {
  kind: string,
  etag: string,
  pageInfo: IPageInfoItem,
  items: ISearchItem[]
}

export interface IPageInfoItem {
  totalResults: number,
  resultsPerPage: number
}
