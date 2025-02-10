// Core
import { FC, useState } from "react";
import cx from "classnames";

// Types
import { TDynamicNavMenuLink, TNavMenuLink } from "../../types";
// Styles
import Styles from "./styles/index.module.scss";
// Hooks
import { useJSXLinks } from "../../hooks/useJSXLinks";

type Props = {
  link: TNavMenuLink<null>;
};

const NavLinkDropdown: FC<Props> = ({ link }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={Styles["nav-link-dropdown"]}
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      {link.title}
      <div className={cx([Styles.dropdown, isOpen && Styles.open])}>
        {useJSXLinks(link.children as TDynamicNavMenuLink[])}
      </div>
    </div>
  );
};

export default NavLinkDropdown;
