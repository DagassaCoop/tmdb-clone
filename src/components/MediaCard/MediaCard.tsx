// Core
import { FC, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

// Styles
import Styles from "./styles/index.module.scss";
// Types
import { TMovie, TTV, isMovie } from "@/types";

type Props = {
  media: TMovie | TTV;
};

const MediaCard: FC<Props> = ({ media }) => {
  const title = isMovie(media) ? media.title : media.name;
  const date = new Date(
    isMovie(media) ? media.release_date : media.first_air_date
  ).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  useEffect(() => {
    const canvas = document.getElementById(
      `rating-canvas-${media.id}`
    ) as HTMLCanvasElement;
    if (!canvas) return;

    // Increase canvas size and scale for better resolution
    const scale = window.devicePixelRatio || 2;
    canvas.width = 38 * scale;
    canvas.height = 38 * scale;
    canvas.style.width = "38px";
    canvas.style.height = "38px";

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    ctx.scale(scale, scale);
    ctx.imageSmoothingEnabled = true;
    ctx.lineCap = "round";

    const rating = Math.round(media.vote_average * 10);
    const mainColor =
      rating >= 70 ? "#21d17c" : rating >= 40 ? "#d3d631" : "#db2360";
    const centerX = canvas.width / scale / 2;
    const centerY = canvas.height / scale / 2;
    const radius = Math.min(centerX, centerY) - 4;
    const startAngle = -Math.PI / 2;
    const endAngle = startAngle + (2 * Math.PI * rating) / 100;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
    ctx.strokeStyle = `${mainColor}33`;
    ctx.lineWidth = 2;
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, startAngle, endAngle);
    ctx.strokeStyle = mainColor;
    ctx.lineWidth = 2;
    ctx.stroke();
  }, [media.id, media.vote_average]);

  return (
    <div className={Styles["media-card"]}>
      <div className={Styles["image-container"]}>
        <Link href={`/media/${media.id}`} className={Styles["image-link"]}>
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
        </Link>
        <div className={Styles["more-icon-container"]}></div>
      </div>

      <div className={Styles["text-container"]}>
        <Link href={`/media/${media.id}`} className={Styles["title"]}>
          {title ?? "N/A"}
        </Link>
        <span className={Styles["date"]}>{date}</span>
        <div className={Styles["rating-container"]}>
          <canvas
            id={`rating-canvas-${media.id}`}
            width={38}
            height={38}
            className={Styles["rating-canvas"]}
          />
          <span className={Styles["rating"]}>
            {Math.round(media.vote_average * 10)}
            <span className={Styles["rating-text"]}>%</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default MediaCard;
