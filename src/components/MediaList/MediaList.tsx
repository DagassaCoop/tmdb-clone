"use client";

// Core
import { FC, useState } from "react";
import cx from "classnames";
import useSWR from "swr";

// Styles
import Styles from "./styles/index.module.scss";
// Types
import { TMediaListContent, TMediaListItem } from "./types";
// Components
import FloatingButton from "../FloatingButton/FloatingButton";
import MediaCard from "../MediaCard/MediaCard";
type Props = {
  className?: string;
  content: TMediaListContent;
};

const MediaList: FC<Props> = ({ content, className: classes }) => {
  const [mediaList, setMediaList] = useState<TMediaListItem>(content.lists[0]);

  const { data, error } = useSWR([`/api/media-list`, mediaList.id], () =>
    mediaList.callback?.()
  );

  if (error) return <div>Failed to load</div>;

  return (
    <div className={cx([Styles["media-list"], classes, "container"])}>
      <div className={cx([Styles.header])}>
        <div className={Styles.title}>{content.title}</div>
        <div>
          <FloatingButton
            value={content.lists.findIndex((item) => item.id === mediaList.id)}
            tags={content.lists.map((item) => item.title)}
            callback={(index) => setMediaList(content.lists[index])}
          />
        </div>
      </div>
      <div className={Styles.content}>
        <div className={Styles.wrapper}>
          {data?.map((item) => (
            <MediaCard key={`${mediaList.id}-${item.id}`} media={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MediaList;
