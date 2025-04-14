// Types
import { MoviesList } from "@/types";

export const filterPresets = {
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
