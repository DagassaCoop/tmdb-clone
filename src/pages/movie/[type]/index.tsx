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
// Styles
import Styles from "./index.module.scss";

interface MoviesProps {
  initialMovies: TMovie[] | TTV[];
  listType: string;
}

const Movies: FC<MoviesProps> = ({ initialMovies, listType }) => {
  return (
    <Base>
      <div className={Styles["movies-type-page"]}>
        <div className={Styles.title}>{listType} Movies</div>
        <Discover initialMediaList={initialMovies} />
      </div>
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

  return {
    props: {
      ...(await serverSideTranslations(locale ?? "en", ["common"])),
      initialMovies,
      listType,
    },
  };
};
