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
    // getList: () => api.movies.getList(MoviesList.POPULAR),
  },
  {
    id: "53a183eb-cf95-4bac-b88b-d2efdf364b76",
    title: "On TV",
    // getList: () => api.movies.getList(MoviesList.POPULAR),
  },
  {
    id: "8de20cfc-6837-4b7e-8aaf-a7f5d761505d",
    title: "For Rent",
    // query: "",
  },
  {
    id: "4da5c4ec-ff2f-4290-8402-1c5cd7937426",
    title: "In Theaters",
    // query: "",
  },
];

export const freeMediaListItems: TMediaListItem[] = [
  {
    id: "71c5a915-c833-46ea-81aa-3ace8decdf2e",
    title: "Movies",
    // query: "",
  },
  {
    id: "5ce7ad0b-8cbf-45a3-8e4e-8618fec6f866",
    title: "TV",
    // query: "",
  },
];
