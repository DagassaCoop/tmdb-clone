// Core
import { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import cx from "classnames";

// Styles
import Styles from "./styles/index.module.scss";
// Mock
import { addMovieLinks } from "./mock/index";
// Book
import { book } from "@/navigation/book";
// Hooks
import { useOutsideClickCallback } from "@/hooks/useOutsideClickCallback";

const AddMovie = () => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);

  useOutsideClickCallback(ref, () => setIsOpen(false));

  return (
    <div className={Styles["add-movie"]}>
      <Image
        src={"/add-movie.svg"}
        alt="add"
        width={22}
        height={22}
        className={Styles.icon}
        ref={ref}
        onClick={() => setIsOpen(!isOpen)}
      />
      <div className={cx([Styles.dropdown, isOpen && Styles.open])}>
        {addMovieLinks.map((link, index) => {
          return (
            <Link
              key={index}
              href={book[link.key]?.url ?? ""}
              className={Styles.link}
            >
              {link.title}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default AddMovie;
