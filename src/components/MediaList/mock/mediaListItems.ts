// Types
import { TMediaListItem } from "../types";

// API
import { api } from "@/api";

export const trendingMediaListItems: TMediaListItem[] = [
  {
    id: "a9c75c99-7d46-4030-a739-eb384fea4585",
    title: "Today",
    callback: async () => await api.trending.getList("day"),
  },
  {
    id: "8c31b4a3-0ed1-422c-b0c9-aaefc6743c27",
    title: "This Week",
    callback: async () => await api.trending.getList("week"),
  },
];

export const popularMediaListItems: TMediaListItem[] = [
  {
    id: "b9a05662-f42e-403e-9a9c-6596fdf0e6bc",
    title: "Streaming",
    callback: async () => await api.movies.getPopular(),
  },
  {
    id: "53a183eb-cf95-4bac-b88b-d2efdf364b76",
    title: "On TV",
    callback: async () => await api.tv.getPopular(),
  },
];
