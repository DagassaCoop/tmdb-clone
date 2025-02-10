// Types
import { TDynamicNavMenuLink } from "../types";

// Components
import NavLink from "../components/NavLink/NavLink";
import NavLinkDropdown from "../components/NavLinkDropdown/NavLinkDropdown";

export const useJSXLinks = (links: TDynamicNavMenuLink[]) => {
  return (
    <>
      {links.map((link, index) => {
        if (link.key === null) {
          return <NavLinkDropdown key={index} link={link} />;
        } else {
          return <NavLink key={index} link={link} />;
        }
      })}
    </>
  );
};
