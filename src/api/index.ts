// Core
import axios from "axios";

// Types
import { MoviesList, TMDBApiRespond, TMovie, TTV } from "@/types";
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
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_API_KEY}`,
          },
        }
      );

      return data.results;
    },
    getPopular: async (): Promise<TMovie[]> => {
      const { data }: { data: TMDBApiRespond<TMovie> } = await axios.get(
        `${root}/3/movie/popular?language=en-US&page=1`,
        {
          headers: {
            accept: "application/json",
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_API_KEY}`,
          },
        }
      );

      return data.results;
    },
  },
  tv: {
    getPopular: async (): Promise<TTV[]> => {
      const { data }: { data: TMDBApiRespond<TTV> } = await axios.get(
        `${root}/3/tv/popular?language=en-US&page=1`,
        {
          headers: {
            accept: "application/json",
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_API_KEY}`,
          },
        }
      );

      return data.results;
    },
  },
  trending: {
    getList: async (time_window: "day" | "week"): Promise<TMovie[] | TTV[]> => {
      const { data }: { data: TMDBApiRespond<TMovie> | TMDBApiRespond<TTV> } =
        await axios.get(
          `${root}/3/trending/all/${time_window}?language=en-US`,
          {
            headers: {
              accept: "application/json",
              Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_API_KEY}`,
            },
          }
        );

      return data.results;
    },
  },
});
