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

interface MoviesProps {
  initialMovies: TMovie[] | TTV[];
}

const Movies: FC<MoviesProps> = ({ initialMovies }) => {
  return (
    <Base>
      <Discover initialMediaList={initialMovies} />
    </Base>
  );
};

export default Movies;

export const getServerSideProps: GetServerSideProps = async ({
  locale,
  params,
}) => {
  let initialMovies: TMovie[] | TTV[] = [];
  const listType = params?.type;

  if (listType && typeof listType === "string")
    initialMovies = await api.tmdb.movie.getList(
      listType.replace("-", "_") as MoviesList
    );

  console.log("initialMovies", initialMovies[0]);

  return {
    props: {
      ...(await serverSideTranslations(locale ?? "en", ["common"])),
      initialMovies,
    },
  };
};
