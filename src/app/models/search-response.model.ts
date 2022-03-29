import { IItems } from './search-item.model';

export interface IResponse {
  kind: string,
  etag: string,
  pageInfo: {
    totalResults: number,
    resultsPerPage: number
  },
  items: IItems[]
}
