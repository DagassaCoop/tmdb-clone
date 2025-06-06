// Types
import { TMediaListContent, MediaListContents } from "../types";

// Mock
import {
  trendingMediaListItems,
  popularMediaListItems,
} from "./mediaListItems";

export const mediaListContents: {
  [key: string]: TMediaListContent;
} = {
  [MediaListContents.TRENDING]: {
    id: "1a4f23e2-1a3a-4986-a292-fc35cdf101eb",
    key: MediaListContents.TRENDING,
    title: "Trending",
    lists: trendingMediaListItems,
  },
  [MediaListContents.POPULAR]: {
    id: "d19bc081-2d5b-4ac2-a0c4-c33b21916abf",
    key: MediaListContents.POPULAR,
    title: "What's Popular",
    lists: popularMediaListItems,
  },
};
