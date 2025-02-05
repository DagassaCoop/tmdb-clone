const base = "/";

// Types
import { MoviesList, TVShowsList } from "@/types";

export type TBookItem = {
  url: string;
};

export const book: Readonly<{
  [key: string]: TBookItem;
}> = Object.freeze({
  root: {
    url: `${base}`,
  },
  movie: {
    // Not in use
    url: `${base}movie`,
  },
  movie_popular: {
    url: `${base}movie/${MoviesList.POPULAR}`,
  },
  movie_now_playing: {
    url: `${base}movie/${MoviesList.NOW_PLAYING.replace("_", "-")}`,
  },
  movie_upcoming: {
    url: `${base}movie/${MoviesList.UPCOMING}`,
  },
  movie_top_rated: {
    url: `${base}movie/${MoviesList.TOP_RATED.replace("_", "-")}`,
  },
  tv: {
    // Not in use
    title: "TV Shows",
    url: `${base}tv`,
  },
  tv_popular: {
    url: `${base}tv/${TVShowsList.POPULAR}`,
  },
  tv_airing_today: {
    url: `${base}tv/${TVShowsList.AIRING_TODAY.replace("_", "-")}`,
  },
  tv_on_tv: {
    url: `${base}tv/${TVShowsList.ON_TV.replace("_", "-")}`,
  },
  tv_top_rated: {
    url: `${base}tv/${TVShowsList.TOP_RATED.replace("_", "-")}`,
  },
  people: {
    // Not in use
    url: `${base}people`,
  },
  person: {
    url: `${base}person`,
  },
  discuss: {
    url: `${base}discuss`,
  },
  leaderboard: {
    url: `${base}leaderboard`,
  },
  support: {
    url: `${base}talk`,
  },
} as {
  [key: string]: TBookItem;
});
