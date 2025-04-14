import { TMovie, TTV } from "@/types";

export enum MediaListContents {
  TRENDING = "trending",
  POPULAR = "popular",
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
  callback?: () => Promise<TMovie[] | TTV[]>;
};
