export interface ISearchItem {
  title: string,
  kind: string,
  etag: string,
  id: IId,
  snippet: ISnippetItem,
  statistics: IStatisticsItem,
  viewCount: string
}

export interface IId {
  kins: string,
  videoId: string,
  // playlistId?: string,
}

export interface ISnippetItem {
  publishedAt: string,
  channelId: string,
  title: string,
  description: string,
  thumbnails: IThumbnails,
  channelTitle: string,
  tags: string[],
  categoryId: string,
  liveBroadcastContent: string,
  localized: ILocalizedItem,
  defaultAudioLanguage: string
}

export interface IThumbnails {
  default: IThumbnailsItem,
  medium: IThumbnailsItem,
  high: IThumbnailsItem,
  standard?: IThumbnailsItem,
  maxres?: IThumbnailsItem
}

export interface IThumbnailsItem {
  url: string,
  width: number,
  height: number
}

export interface ILocalizedItem {
  title: string,
  description: string
}

export interface IStatisticsItem {
  viewCount: string,
  likeCount: string,
  dislikeCount?: string,
  favoriteCount: string,
  commentCount: string
}
