// Core
import axios from "axios";

// Types
import { MoviesList, TMDBApiRespond, TMovie, TTV, TVShowsList } from "@/types";
import { IFormValues } from "@/components/Filter/types/form";

// Config
import { root } from "../config";

// Helpers
import { getFiltersIntoQuery } from "@/helpers/getFiltersIntoQuery";

export const api = Object.freeze({
  movie: {
    getList: async (listType: MoviesList): Promise<TMovie[]> => {
      const { data }: { data: TMDBApiRespond<TMovie> } = await axios.get(
        `${root}/3/movie/${listType.replace("-", "_")}?language=en-US&page=1`,
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
    getList: async (listType: TVShowsList): Promise<TTV[]> => {
      const { data }: { data: TMDBApiRespond<TTV> } = await axios.get(
        `${root}/3/tv/${listType.replace("-", "_")}?language=en-US&page=1`,
        {
          headers: {
            accept: "application/json",
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_API_KEY}`,
          },
        }
      );

      return data.results;
    },
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
  discover: {
    getList: async (
      mediaType: "movie" | "tv",
      filters: IFormValues
    ): Promise<TMovie[] | TTV[]> => {
      const query = getFiltersIntoQuery(filters);

      const { data } = await axios.get(
        `${root}/3/discover/${mediaType}?${query}`,
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
