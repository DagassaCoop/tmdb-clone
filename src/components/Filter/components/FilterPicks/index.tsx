// Core
import { FC } from "react";

// Types
import { EFilterName, TFilter } from "@/types";
import { TForm } from "@/components/Filter/types/form";

// Styles
import Styles from "./styles/index.module.scss";

interface Props {
  filter: TFilter;
  form: TForm;
}

export const FilterPicks: FC<Props> = ({ filter }) => {
  // const { watch } = form;
  // const currentValue = watch(filter.name.toString());

  return (
    <div className={Styles.filter}>
      {/* <div style={{ fontSize: '10px', color: '#666', marginBottom: '4px' }}>
        Current value: {JSON.stringify(currentValue)}
      </div> */}
      {EFilterName[filter.name]}
    </div>
  );
};
