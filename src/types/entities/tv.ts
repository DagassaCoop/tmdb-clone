import { TMedia } from "./media";

export enum TVShowsList {
  POPULAR = "popular",
  AIRING_TODAY = "airing_today",
  ON_TV = "on_the_air",
  TOP_RATED = "top_rated",
}

export type TTV = TMedia & {
  name: string;
  original_name: string;
  first_air_date: string;
};
