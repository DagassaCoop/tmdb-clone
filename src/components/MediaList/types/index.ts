export enum MediaListContents {
  TRENDING = "trending",
  POPULAR = "popular",
  FREE = "free_to_watch",
}

export type TMediaListContent = {
  id: string;
  key: string;
  title: string;
  lists: TMediaListItem[];
};

export type TMediaListItem = {
  id: string;
  title: string;
  query: string;
};
