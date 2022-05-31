export interface ISearchItem {
  etag: string;
  id: IId;
  kind: string;
  snippet: ISnippetItem;
}

export interface IId {
  kind: string;
  videoId: string;
}

export interface ISnippetItem {
  channelId: string;
  channelTitle: string;
  description: string;
  liveBroadcastContent: string;
  publishedTime: string;
  publishedAt: string;
  thumbnails: IThumbnails;
  title: string;
}

export interface IThumbnails {
  default: IThumbnailsItem;
  high: IThumbnailsItem;
  medium: IThumbnailsItem;
}

export interface IThumbnailsItem {
  height: number;
  url: string;
  width: number;
}
