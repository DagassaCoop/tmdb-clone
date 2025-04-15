"use client";

// Core
import { FC, useState, useEffect, memo } from "react";

// Styles
import Styles from "./styles/index.module.scss";
// Types
import { TMovie, TTV } from "@/types/";
// Components
import MediaCard from "../MediaCard/MediaCard";

interface Props {
  initialMediaList: TMovie[] | TTV[];
}

const Discover: FC<Props> = ({ initialMediaList }) => {
  const [mediaList, setMediaList] = useState<TMovie[] | TTV[]>(
    initialMediaList
  );

  useEffect(() => {
    setMediaList(initialMediaList);
  }, [initialMediaList]);

  return (
    <div className={Styles.discover}>
      {/* Filters */}
      <div className={Styles.filters}></div>
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
