export type TBaseFilterConfig = {
  include_adult?: boolean;
  language?: string;
  page?: number;
  sort_by?: string;
  vote_average?: {
    gte?: number;
    lte?: number;
  };
  vote_count?: {
    gte?: number;
    lte?: number;
  };
  watch_region?: string;
  with_companies?: string;
  with_genres?: string;
  with_keywords?: string;
  with_origin_country?: string;
  with_original_language?: string;
  with_runtime?: {
    gte?: number;
    lte?: number;
  };
  with_watch_monetization_types?: string;
  with_watch_providers?: string;
  without_companies?: string;
  without_genres?: string;
  without_keywords?: string;
  without_watch_providers?: string;
};

export type TMovieFilterConfig = TBaseFilterConfig & {
  type: "movie";
  certification?: string;
  certification_country?: string;
  primary_release_year?: number;
  primary_release_date?: {
    gte?: string;
    lte?: string;
  };
  region?: string;
  release_date?: {
    gte?: string;
    lte?: string;
  };
  with_cast?: string;
  with_crew?: string;
  with_people?: string;
  with_release_type?: number;
  year?: number;
};

export type TTVShowFilterConfig = TBaseFilterConfig & {
  type: "tv";
  air_date?: {
    gte?: string;
    lte?: string;
  };
  first_air_date_year?: number;
  first_air_date?: {
    gte?: string;
    lte?: string;
  };
  include_null_first_air_dates?: boolean;
  screened_theatrically?: boolean;
  timezone?: string;
  with_networks?: number;
  with_status?: string;
  with_type?: string;
};

export type TFilterConfig = TMovieFilterConfig | TTVShowFilterConfig;

export enum EFilterType {
  "select",
  "range-single",
  "range-double",
  "checkbox",
  "text",
  "dates",
  "picks",
}

export enum EFilterName {
  "sort",
  "release-dates",
  "ait-dates",
  "genres",
  "certification",
  "network",
  "language",
  "user-score",
  "min-vote",
  "runtime",
  "keywords",
}

export type TFilter = {
  id: string;
  label: string;
  name: EFilterName; // Data
  type: EFilterType; // UI
  initialValue?: string | number | string[] | number[];
};
