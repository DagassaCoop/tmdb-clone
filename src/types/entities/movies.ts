import { TMedia } from "./media";
import { TTV } from "./tv";
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

export const isMovie = (media: TMovie | TTV): media is TMovie => {
  return "title" in media;
};
