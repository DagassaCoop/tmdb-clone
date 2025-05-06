"use client";

// Core
import { FC } from "react";
import { Select, MenuItem, FormControl } from "@mui/material";

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
  const { register, errors } = form;

  return (
    <FormControl fullWidth className={Styles["filter-select"]}>
      <Select
        {...register(filter.name.toString())}
        error={!!errors[filter.name]}
        displayEmpty
        defaultValue={filter.options[0].value}
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
    </FormControl>
  );
};
