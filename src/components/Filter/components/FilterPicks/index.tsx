// Core
import { FC } from "react";

// Types
import { EFilterName, TFilter } from "@/types";
import { TForm } from "../../types/form";

// Styles
import Styles from "./styles/index.module.scss";

interface Props {
  filter: TFilter;
  form: TForm;
}

export const FilterPicks: FC<Props> = ({ filter, form }) => {
  return <div className={Styles.filter}>{EFilterName[filter.name]}</div>;
};
