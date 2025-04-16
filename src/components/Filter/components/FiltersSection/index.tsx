// Core
import { FC } from "react";

// Styles
import Styles from "./styles/index.module.scss";
// Types
import { TFilter } from "@/types";
// Components
import { FilterBase } from "../FilterBase";
// Types
import { TForm } from "@/components/Filter/types/form";

interface Props {
  label: string;
  filters: TFilter[];
  form: TForm;
}

export const FiltersSection: FC<Props> = ({ label, filters, form }) => {
  return (
    <div className={Styles[`filters-section`]}>
      <h3>{label}</h3>
      {filters.map((filter) => (
        <FilterBase key={filter.id} filter={filter} form={form} />
      ))}
    </div>
  );
};
