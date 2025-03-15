// Core
import { FC } from "react";
import cx from "classnames";

// Styles
import Styles from "./styles/index.module.scss";
import { TMediaListContent } from "./types";
import FloatingButton from "../FloatingButton/FloatingButton";

type Props = {
  className?: string;
  content: TMediaListContent;
};

const MediaList: FC<Props> = ({ content, className: classes }) => {
  return (
    <div className={cx([Styles["media-list"], classes])}>
      <div className={cx([Styles.header], "container")}>
        <div className={Styles.title}>{content.title}</div>
        <div>
          <FloatingButton tags={content.lists.map((item) => item.title)} />
        </div>
      </div>
    </div>
  );
};

export default MediaList;
