import { FC } from "react";

// Styles
import Styles from "./styles/index.module.scss";

// Types
import { TFilter } from "@/types";
import { TForm } from "../../types/form";
import { TOption } from "../../types/option";

interface Props {
  filter: TFilter & { options: TOption[] };
  form: TForm;
}

export const FilterRangeDouble: FC<Props> = ({ filter, form }) => {
  return (
    <div className={Styles["filter-range-double"]}>
      <h1>FilterRangeDouble</h1>
    </div>
  );
};
