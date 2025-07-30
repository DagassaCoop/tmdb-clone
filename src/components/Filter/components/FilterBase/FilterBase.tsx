// Core
import { FC } from "react";

// Styles
import Styles from "./styles/index.module.scss";
// Types
import { TFilter } from "@/types";
import { TForm } from "@/components/Filter/types/form";
// Helpers
import { useFilterComponent } from "@/hooks/useFilterComponent";
interface Props {
  filter: TFilter;
  form: TForm;
}

export const FilterBase: FC<Props> = ({ filter, form }) => {
  return (
    <div className={Styles[`filter-base`]}>
      <h4 className={Styles.title}>{filter.label}</h4>
      {useFilterComponent(filter, form)}
    </div>
  );
};
