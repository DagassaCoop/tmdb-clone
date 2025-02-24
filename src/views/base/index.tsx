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
  weight: ["400", "600", "700"],
});

type Props = {
  className?: string;
} & PropsWithChildren;

const Base: FC<Props> = ({ children, className }) => {
  return (
    <div className={cx(source_code_pro.className, className)}>
      <Header />
      <main>{children}</main>
    </div>
  );
};

export default Base;
