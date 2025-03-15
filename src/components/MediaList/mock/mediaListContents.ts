// Types
import { TMediaListContent, MediaListContents } from "../types";

// Mock
import {
  trendingMediaListItems,
  popularMediaListItems,
  freeMediaListItems,
} from "./mediaListItems";

export const mediaListContents: {
  [key: string]: TMediaListContent;
} = {
  [MediaListContents.TRENDING]: {
    id: "1a4f23e2-1a3a-4986-a292-fc35cdf101eb",
    key: MediaListContents.TRENDING,
    title: "Tending",
    lists: trendingMediaListItems,
  },
  [MediaListContents.POPULAR]: {
    id: "d19bc081-2d5b-4ac2-a0c4-c33b21916abf",
    key: MediaListContents.POPULAR,
    title: "What's Popular",
    lists: popularMediaListItems,
  },
  [MediaListContents.FREE]: {
    id: "46cad094-24da-4a52-adb6-619bb1f8a3f6",
    key: MediaListContents.FREE,
    title: "Free To Watch",
    lists: freeMediaListItems,
  },
};
