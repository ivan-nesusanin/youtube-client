import { IPageInfoItem } from './search-response.model';

export interface IStatisticsResponse {
  etag: string;
  items: IZero[];
  kind: string;
  pageInfo: IPageInfoItem;
}

export interface IZero {
  etag: string;
  id: string;
  kind: string;
  statistics: IStatisticsItem;
}

export interface IStatisticsItem {
  commentCount: string;
  favoriteCount: string;
  likeCount: string;
  viewCount: string;
}
