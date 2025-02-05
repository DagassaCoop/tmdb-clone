// Core
import { FC } from "react";
import { GetServerSideProps } from "next";

// Api
import { api } from "@/api";
import { MoviesList } from "@/types";

type Props = {
  movies: any[];
};

export const Home: FC<Props> = (movies) => {
  console.log(movies);
  return <div>Home</div>;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  try {
    const movies = await api.movies.getList(MoviesList.TOP_RATED);
    console.log(movies);

    return {
      props: {
        movies,
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
