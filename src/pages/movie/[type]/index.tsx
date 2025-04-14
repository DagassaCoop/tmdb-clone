// Core
import React, { FC } from "react";
import { GetServerSideProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

// Components
import Base from "@/views/base";
import Discover from "@/components/Discover";
// Types
import { TMovie, MoviesList } from "@/types/entities/movies";
// API
import { api } from "@/api/tmdb/tmdb";

interface MoviesProps {
  movies: string;
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
  let movies: TMovie[] = [];
  const listType = params?.type;

  if (listType) movies = await api.movie.getList(listType as MoviesList);

  return {
    props: {
      ...(await serverSideTranslations(locale ?? "en", ["common"])),
      movies,
    },
  };
};
