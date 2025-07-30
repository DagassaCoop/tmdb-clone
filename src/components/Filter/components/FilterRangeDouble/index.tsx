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
  // const currentValue = watch(filter.name.toString());

  return (
    <div className={Styles["filter-range-double"]}>
      {/* <div style={{ fontSize: '10px', color: '#666', marginBottom: '4px' }}>
        Current value: {JSON.stringify(currentValue)}
      </div> */}
      <FormControl fullWidth>
        <Controller
          name={filter.name.toString()}
          control={control}
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
