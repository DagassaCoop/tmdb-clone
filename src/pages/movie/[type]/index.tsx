// Core
import React, { FC } from "react";
import { GetServerSideProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

// Components
import Base from "@/views/base";
import Discover from "@/components/Discover";
// Types
import { TMovie, TTV, MoviesList } from "@/types/";
// API
import { api } from "@/api";
// Mock
import { filterPresets } from "@/api/tmdb/mock/discover";

interface MoviesProps {
  movies: TMovie[] | TTV[];
}

const Movies: FC<MoviesProps> = ({ movies }) => {
  console.log(movies);
  return (
    <Base>
      <Discover />
    </Base>
  );
};

export default Movies;

export const getServerSideProps: GetServerSideProps = async ({
  locale,
  params,
}) => {
  let movies: TMovie[] | TTV[] = [];
  const listType = params?.type;

  if (listType && typeof listType === "string")
    movies = await api.tmdb.discover.getList(
      "movie",
      filterPresets.movie[listType.replace("-", "_") as MoviesList]
    );

  return {
    props: {
      ...(await serverSideTranslations(locale ?? "en", ["common"])),
      movies,
    },
  };
};
