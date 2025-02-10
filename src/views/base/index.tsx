// Core
import { FC, PropsWithChildren } from "react";
import cx from "classnames";

// Components
import Header from "@/components/Header/Header";

// Fonts
import { Source_Code_Pro } from "next/font/google";

const source_code_pro = Source_Code_Pro({
  subsets: ["latin"],
  fallback: ["arial"],
  weight: ["400", "600"],
});

type Props = {
  className?: string;
} & PropsWithChildren;

const Base: FC<Props> = ({ children, className: classes }) => {
  return (
    <div className={cx([classes, source_code_pro.className])}>
      <Header />
      {children}
    </div>
  );
};

export default Base;
