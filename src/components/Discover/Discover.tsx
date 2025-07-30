"use client";

// Core
import { FC, memo } from "react";
import useSWR from "swr";

// Styles
import Styles from "./styles/index.module.scss";
// Types
import { TMovie, TTV } from "@/types/";
// Components
import MediaCard from "../MediaCard/MediaCard";
import Filter from "../Filter/Filter";
// API
import { api } from "@/api";
// Store
import { useFilterStore } from "@/store/filterStore";

interface Props {
  initialMediaList: TMovie[] | TTV[];
}

const Discover: FC<Props> = ({ initialMediaList }) => {
  const filters = useFilterStore((state) => state.filters)

  const {
    data: mediaList,
    // error,
    // isLoading,
  } = useSWR(
    ["/api/discover", filters],
    () => api.tmdb.discover.getList("movie", filters),
    {
      fallbackData: initialMediaList,
    }
  );

  return (
    <div className={Styles.discover}>
      {/* Filter */}
      <div className={Styles.filters}>
        <Filter />
      </div>
      {/* List */}
      <div className={Styles.list}>
        {mediaList.map((media) => {
          return <MediaCard key={media.id} media={media} />;
        })}
      </div>
    </div>
  );
};

export default memo(Discover);
