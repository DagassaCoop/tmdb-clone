// Types
import { MoviesList } from "@/types";

export interface FilterParams {
  include_adult: boolean;
  include_video: boolean;
  language: string;
  page: number;
  sort_by: string;
  with_release_type?: string;
  release_date_gte?: string;
  release_date_lte?: string;
  without_genres?: string;
  vote_count_gte?: number;
}

type FilterPreset = {
  [key: string]: FilterParams[];
};

export const filterPresets: {
  movie: FilterPreset;
  tv: FilterPreset;
} = {
  movie: {
    [MoviesList.POPULAR]: [
      {
        include_adult: false,
        include_video: false,
        language: "en-US",
        page: 1,
        sort_by: "popularity.desc",
      },
    ],
    [MoviesList.NOW_PLAYING]: [
      {
        include_adult: false,
        include_video: false,
        language: "en-US",
        page: 1,
        sort_by: "popularity.desc",
        with_release_type: "2|3",
        release_date_gte: "{min_date}",
        release_date_lte: "{max_date}",
      },
    ],
    [MoviesList.TOP_RATED]: [
      {
        include_adult: false,
        include_video: false,
        language: "en-US",
        page: 1,
        sort_by: "vote_average.desc",
        without_genres: "99,10755",
        vote_count_gte: 200,
      },
    ],
    [MoviesList.UPCOMING]: [
      {
        include_adult: false,
        include_video: false,
        language: "en-US",
        page: 1,
        sort_by: "popularity.desc",
        with_release_type: "2|3",
        release_date_gte: "{min_date}",
        release_date_lte: "{max_date}",
      },
    ],
  },
  tv: {},
};
