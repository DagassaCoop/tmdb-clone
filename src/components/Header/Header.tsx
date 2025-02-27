// Core
import React from "react";
import cx from "classnames";
import Link from "next/link";
import Image from "next/image";

// Styles
import Styles from "./styles/index.module.scss";
// Mock
import { navLinks } from "./mock/navLinks";
import { useJSXLinks } from "./hooks/useJSXLinks";
// Book
import { book } from "@/navigation/book";
// Components
import AddMovie from "./components/AddMovie/AddMovie";
import SwitchLanguage from "./components/LanguageSwitcher/LanguageSwitcher";
import Notifications from "./components/Notifications/Notifications";
import Settings from "./components/Settings/Settings";

const Header = () => {
  return (
    <header className={Styles.header}>
      <div className={cx([Styles.content, "container"])}>
        <div className={Styles["nav-wrapper"]}>
          <Link href={book.root.url} className={Styles.logo}>
            <Image
              src={"/tmdb-logo.svg"}
              alt="TMDB"
              width={154}
              height={20}
              priority
              className={Styles["logo__icon"]}
            />
          </Link>
          <nav className={Styles.nav}>{useJSXLinks(navLinks)}</nav>
        </div>
        <div className={Styles["actions-wrapper"]}>
          <AddMovie />
          <SwitchLanguage />
          <Notifications />
          <Settings />
        </div>
      </div>
    </header>
  );
};

export default Header;
