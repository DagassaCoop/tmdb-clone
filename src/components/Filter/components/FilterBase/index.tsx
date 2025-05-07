// Core
import { FC } from "react";

// Styles
import Styles from "./styles/index.module.scss";
// Types
import { TFilter } from "@/types";
import { TForm } from "@/components/Filter/types/form";
// Helpers
import { getFilterComponent } from "@/helpers/getFilterComponent";
interface Props {
  filter: TFilter;
  form: TForm;
}

export const FilterBase: FC<Props> = ({ filter, form }) => {
  return (
    <div className={Styles[`filter-base`]}>
      <h4 className={Styles.title}>{filter.label}</h4>
      {getFilterComponent(filter, form)}
    </div>
  );
};
