// Core
import { FormControl, Slider } from "@mui/material";
import { FC } from "react";
import { Controller } from "react-hook-form";

// Styles
import Styles from "./styles/index.module.scss";

// Types
import { TFilter } from "@/types";
import { TForm } from "../../types/form";
import { TOption } from "../../types/option";

interface Props {
  filter: TFilter & { options: TOption[] };
  form: TForm;
  step: number;
}

export const FilterRangeSingle: FC<Props> = ({ filter, form, step }) => {
  const { control } = form;

  return (
    <FormControl fullWidth className={Styles["filter-range-single"]}>
      <Controller
        name={filter.name.toString()}
        control={control}
        defaultValue={filter.initialValue as number}
        render={({ field }) => (
          <Slider
            {...field}
            value={Number(field.value)}
            step={step}
            marks={filter.options.map((option) => ({
              value: Number(option.value),
              label: option.label,
            }))}
            min={0}
            max={Number(filter.options.at(-1)?.value) || 500}
            valueLabelDisplay="auto"
          />
        )}
      />
    </FormControl>
  );
};
