// Core
import axios from "axios";

// Types
import { MoviesList, TMDBApiRespond, TMovie } from "@/types";
// Config
import { root } from "./config";

export const api = Object.freeze({
  movies: {
    getList: async (listType: MoviesList): Promise<TMovie[]> => {
      const { data }: { data: TMDBApiRespond<TMovie> } = await axios.get(
        `${root}/3/movie/${listType}?language=en-US&page=1`,
        {
          headers: {
            accept: "application/json",
            Authorization: `Bearer ${process.env.TMDB_API_KEY}`,
          },
        }
      );

      return data.results;
    },
  },
});
