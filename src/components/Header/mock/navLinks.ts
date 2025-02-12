import { TDynamicNavMenuLink } from "../types";

export const navLinks: TDynamicNavMenuLink[] = [
  {
    title: "Movies",
    key: null,
    children: [
      {
        title: "Popular",
        key: "movie_popular",
      },
      {
        title: "Now Playing",
        key: "movie_now_playing",
      },
      {
        title: "Upcoming",
        key: "movie_upcoming",
      },
      {
        title: "Top Rated",
        key: "movie_top_rated",
      },
    ],
  },
  {
    title: "TV Shows",
    key: null,
    children: [
      {
        title: "Popular",
        key: "tv_popular",
      },
      {
        title: "Airing Today",
        key: "tv_airing_today",
      },
      {
        title: "On TV",
        key: "tv_on_tv",
      },
      {
        title: "Top Rated",
        key: "tv_top_rated",
      },
    ],
  },
  {
    title: "People",
    key: null,
    children: [
      {
        title: "Popular Person",
        key: "person",
      },
    ],
  },
  {
    title: "More",
    key: null,
    children: [
      {
        title: "Discussion",
        key: "discuss",
      },
      {
        title: "Leaderboard",
        key: "leaderboard",
      },
      {
        title: "Support",
        key: "support",
      },
    ],
  },
];
