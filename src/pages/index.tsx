// Core
import { FC } from "react";
import { GetServerSideProps } from "next";

// Api
import { api } from "@/api";
// Types
import { MoviesList, TMovie } from "@/types";
import Base from "@/views/base";

type Props = {
  movies: TMovie[];
};

export const Home: FC<Props> = (movies) => {
  return (
    <>
      <Base>Home</Base>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const data = await api.movies.getList(MoviesList.TOP_RATED);

    return {
      props: {
        movies: data,
      },
    };
  } catch (error) {
    console.log(error);
    return {
      notFound: true,
    };
  }
};

export default Home;
