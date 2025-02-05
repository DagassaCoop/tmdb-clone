import { MoviesList, TVShowsList } from "@/types";

type TNavMenuLink =
  | {
      title: string;
      key: null;
      children: {
        [key: string]: TNavMenuLink;
      };
    }
  | {
      title: string;
      key: string;
      children?: never;
    };

export const navLinks = Object.freeze({
  movie: {
    title: "Movies",
    key: null,
    children: {
      [MoviesList.POPULAR]: {
        title: "Popular",
        key: "movie_popular",
      },
      [MoviesList.NOW_PLAYING]: {
        title: "Now Playing",
        key: "movie_now_playing",
      },
      [MoviesList.UPCOMING]: {
        title: "Upcoming",
        key: "movie_upcoming",
      },
      [MoviesList.TOP_RATED]: {
        title: "Top Rated",
        key: "movie_top_rated",
      },
    },
  },
  tv: {
    title: "TV Shows",
    key: null,
    children: {
      [TVShowsList.POPULAR]: {
        title: "Popular",
        key: "tv_popular",
      },
      [TVShowsList.AIRING_TODAY]: {
        title: "Airing Today",
        key: "tv_airing_today",
      },
      [TVShowsList.ON_TV]: {
        title: "On TV",
        key: "tv_on_tv",
      },
      [TVShowsList.TOP_RATED]: {
        title: "Top Rated",
        key: "tv_top_rated",
      },
    },
  },
  people: {
    title: "People",
    key: null,
    children: {
      popular: {
        title: "Popular Person",
        key: "person",
      },
    },
  },
  more: {
    title: "More",
    key: null,
    children: {
      discuss: {
        title: "Discussion",
        key: "discuss",
      },
      leaderboard: {
        title: "Leaderboard",
        key: "leaderboard",
      },
      support: {
        title: "Support",
        key: "support",
      },
    },
  },
} as {
  [key: string]: TNavMenuLink;
});
