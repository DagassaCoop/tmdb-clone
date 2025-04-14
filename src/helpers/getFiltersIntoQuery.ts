import { FilterParams } from "@/api/tmdb/mock/discover";

export const getFiltersIntoQuery = (filters: FilterParams[]): string => {
  const query = filters.map((filter) => {
    return Object.entries(filter)
      .map(([key, value]) => `${key}=${value}`)
      .join("&");
  });

  return query[0];
};
