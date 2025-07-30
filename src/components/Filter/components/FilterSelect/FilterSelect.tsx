"use client";

// Core
import { FC } from "react";
import { Select, MenuItem, FormControl } from "@mui/material";
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
}

export const FilterSelect: FC<Props> = ({ filter, form }) => {
  const { control, errors } = form;
  // console.log('select filter >> ', filter)

  return (
    <FormControl fullWidth className={Styles["filter-select"]}>
      {/* <div style={{ fontSize: '10px', color: '#666', marginBottom: '4px' }}>
        Filter name: {filter.name}, Initial value: {JSON.stringify(filter.initialValue)}
      </div> */}
      <Controller
        name={filter.name.toString()}
        control={control}
        render={({ field }) => (
          <Select
            {...field}
            error={!!errors[filter.name]}
            className={Styles["options-wrapper"]}
            sx={{
              "& .MuiSelect-select": {
                padding: "10px 12px",
              },
              "& .MuiOutlinedInput-notchedOutline": {
                display: "none",
              },
            }}
          >
            {filter.options.map((option: TOption) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </Select>
        )}
      />
    </FormControl>
  );
};
