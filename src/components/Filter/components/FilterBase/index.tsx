// Core
import { FC } from "react";

// Styles
import Styles from "./styles/index.module.scss";
// Types
import { TFilter } from "@/types";
// Helpers
import { getFilterComponent } from "@/helpers/getFilterComponent";
// Types
import { TForm } from "@/components/Filter/types/form";

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
