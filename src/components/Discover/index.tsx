"use client";

// Core
import { FC, useState, memo } from "react";
import useSWR from "swr";

// Styles
import Styles from "./styles/index.module.scss";
// Types
import { TMovie, TTV } from "@/types/";
import { IFormValues } from "@/components/Filter/types/form";
// Components
import MediaCard from "../MediaCard/MediaCard";
import Filter from "../Filter";
// API
import { api } from "@/api";

interface Props {
  initialMediaList: TMovie[] | TTV[];
}

const Discover: FC<Props> = ({ initialMediaList }) => {
  const [filters, setFilters] = useState<IFormValues>({});

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

  const onFilterUpdate = (filters: IFormValues) => {
    setFilters(filters);
  };

  return (
    <div className={Styles.discover}>
      {/* Filter */}
      <div className={Styles.filters}>
        <Filter callback={onFilterUpdate} />
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
