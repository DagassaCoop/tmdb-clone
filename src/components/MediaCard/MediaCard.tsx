// Core
import { FC } from "react";
import Image from "next/image";

// Styles
import Styles from "./styles/index.module.scss";
// Types
import { TMovie, TTV, isMovie } from "@/types";

type Props = {
  media: TMovie | TTV;
};

const MediaCard: FC<Props> = ({ media }) => {
  const title = isMovie(media) ? media.title : media.name;

  return (
    <div className={Styles["media-card"]}>
      <div className={Styles["image-container"]}>
        <Image
          src={
            process.env.NEXT_PUBLIC_TMDB_IMAGES_LOCATION_URL +
            "w500" +
            media.poster_path
          }
          alt={title ?? ""}
          width={700}
          height={475}
          style={{
            width: "100%",
            height: "auto",
          }}
          priority={true}
        />
      </div>
      <div className={Styles["text-container"]}>
        <div className={Styles["title"]}>{title ?? "N/A"}</div>
      </div>
    </div>
  );
};

export default MediaCard;
