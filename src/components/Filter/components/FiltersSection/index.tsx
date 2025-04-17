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
// MUI
import { Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

interface Props {
  label: string;
  filters: TFilter[];
  form: TForm;
  open: boolean;
}

export const FiltersSection: FC<Props> = ({ label, filters, form, open }) => {
  return (
    <Accordion className={Styles[`filters-section`]} defaultExpanded={open}>
      <AccordionSummary
        expandIcon={<NavigateNextIcon className={Styles.icon} />}
        className={Styles.header}
        sx={{
          "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
            transform: "rotate(90deg)",
          },
        }}
      >
        <h3 className={Styles.title}>{label}</h3>
      </AccordionSummary>
      <AccordionDetails>
        {filters.map((filter) => (
          <FilterBase key={filter.id} filter={filter} form={form} />
        ))}
      </AccordionDetails>
    </Accordion>
  );
};
