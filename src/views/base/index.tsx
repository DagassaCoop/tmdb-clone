import Header from "@/components/header/Header";
import { FC, PropsWithChildren } from "react";

type Props = {} & PropsWithChildren;

const Base: FC<Props> = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
};

export default Base;
