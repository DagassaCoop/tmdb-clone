// Types
import { MoviesList } from "@/types";

export const moviesFilters = {
  [MoviesList.POPULAR]: [
    {
      include_adult: false,
      include_video: false,
      language: "en-US",
      page: 1,
      sort_by: "popularity.desc",
    },
  ],
};
