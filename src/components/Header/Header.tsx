// Core
import React from "react";
import cx from "classnames";

// Styles
import Styles from "./styles/index.module.scss";
// Mock
import { navLinks } from "./mock/navLinks";
import { useJSXLinks } from "./hooks/useJSXLinks";

const Header = () => {
  return (
    <header className={cx([Styles.header, "container"])}>
      <div className={Styles.content}>
        <nav className={Styles.nav}>{useJSXLinks(navLinks)}</nav>
      </div>
    </header>
  );
};

export default Header;
