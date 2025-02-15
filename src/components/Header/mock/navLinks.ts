import { TDynamicNavMenuLink } from "../types";

export const navLinks: TDynamicNavMenuLink[] = [
  {
    title: "navigation.movies",
    key: null,
    children: [
      {
        title: "movies.popular",
        key: "movie_popular",
      },
      {
        title: "movies.nowPlaying",
        key: "movie_now_playing",
      },
      {
        title: "movies.upcoming",
        key: "movie_upcoming",
      },
      {
        title: "movies.topRated",
        key: "movie_top_rated",
      },
    ],
  },
  {
    title: "navigation.tvShows",
    key: null,
    children: [
      {
        title: "tv.popular",
        key: "tv_popular",
      },
      {
        title: "tv.airingToday",
        key: "tv_airing_today",
      },
      {
        title: "tv.onTheAir",
        key: "tv_on_tv",
      },
      {
        title: "tv.topRated",
        key: "tv_top_rated",
      },
    ],
  },
  {
    title: "navigation.people",
    key: null,
    children: [
      {
        title: "people.person",
        key: "person",
      },
    ],
  },
  {
    title: "navigation.more",
    key: null,
    children: [
      {
        title: "more.discussion",
        key: "discuss",
      },
      {
        title: "more.leaderboard",
        key: "leaderboard",
      },
      {
        title: "more.support",
        key: "support",
      },
    ],
  },
];
