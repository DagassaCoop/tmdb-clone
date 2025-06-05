import { FC } from "react";
import { FormControl, Slider } from "@mui/material";
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

export const FilterRangeDouble: FC<Props> = ({ filter, form, step }) => {
  const { control } = form;

  return (
    <div className={Styles["filter-range-double"]}>
      <FormControl fullWidth>
        <Controller
          name={filter.name.toString()}
          control={control}
          defaultValue={filter.initialValue || [0, 100]}
          render={({ field }) => (
            <Slider
              {...field}
              value={field.value as [number, number]}
              step={step}
              marks={filter.options.map((option) => ({
                value: Number(option.value),
                label: option.label,
              }))}
              min={0}
              max={Number(filter.options.at(-1)?.value)}
              valueLabelDisplay="auto"
            />
          )}
        />
      </FormControl>
    </div>
  );
};
