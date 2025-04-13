// Core
import { FC, PropsWithChildren } from "react";
import cx from "classnames";

// Components
import Header from "@/components/Header/Header";

// Fonts
import { Source_Sans_3 } from "next/font/google";

const source_sans_3 = Source_Sans_3({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

type Props = {
  className?: string;
} & PropsWithChildren;

const Base: FC<Props> = ({ children, className }) => {
  return (
    <div className={cx(source_sans_3.className, className)}>
      <Header />
      <main>{children}</main>
    </div>
  );
};

export default Base;
