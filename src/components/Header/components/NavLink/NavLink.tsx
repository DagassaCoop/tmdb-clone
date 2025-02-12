// Core
import { FC, memo } from "react";
import Link from "next/link";

// Types
import { TNavMenuLink } from "../../types";
// Styles
import Styles from "./styles/index.module.scss";
// Book
import { book } from "@/navigation/book";

type Props = {
  link: TNavMenuLink<string>;
};

const NavLink: FC<Props> = ({ link }) => {
  return (
    <Link href={book[link.key].url} className={Styles["nav-link"]}>
      <div className={Styles.title}>{link.title}</div>
    </Link>
  );
};

export default memo(NavLink);
