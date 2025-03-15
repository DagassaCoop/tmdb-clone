// Core
import { FC } from "react";

// Styles
import Styles from "./styles/index.module.scss";

type Props = {
  tags: string[];
};

const FloatingButton: FC<Props> = ({ tags }) => {
  return (
    <div className={Styles["floating-button"]}>
      {tags.map((tag, index) => {
        return <div key={index}>{tag}</div>;
      })}
    </div>
  );
};

export default FloatingButton;
