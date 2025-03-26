import { TMedia } from "./media";

export enum MoviesList {
  POPULAR = "popular",
  NOW_PLAYING = "now_playing",
  UPCOMING = "upcoming",
  TOP_RATED = "top_rated",
}

export type TMovie = TMedia & {
  title: string;
  original_title: string;
  release_date: string;
  video: boolean;
};
