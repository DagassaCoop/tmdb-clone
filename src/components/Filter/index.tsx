"use client";

// Core
import { useForm } from "react-hook-form";
import { FC, useState } from "react";

// Components
import { FiltersSection } from "./components/FiltersSection";
// Styles
import Styles from "./styles/index.module.scss";
// Mock
import { moviePreset, sortPreset } from "./mock/presets";
import { TFilter } from "@/types";
import { IFormValues } from "./types/form";

interface Props {
  callback: (filters: IFormValues) => void;
}

// Helper to parse presets into initial values
const getInitialValuesFromPreset = (presets: TFilter[]) => {
  return presets.reduce((acc: IFormValues, preset) => {
    acc[preset.name] = preset.initialValue;
    return acc;
  }, {});
};

const Filter: FC<Props> = ({ callback }) => {
  const [currentValues, setCurrentValues] = useState<IFormValues>({
    ...getInitialValuesFromPreset(sortPreset),
    ...getInitialValuesFromPreset(moviePreset),
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isDirty },
    reset,
  } = useForm<IFormValues>({
    defaultValues: currentValues,
  });

  const onSubmit = (data: IFormValues) => {
    setCurrentValues(data);
    reset(data);
    callback(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={Styles.filter}>
      <FiltersSection
        label="Sort"
        filters={sortPreset}
        form={{ register, errors }}
        open={false}
      />
      <FiltersSection
        label="Filters"
        filters={moviePreset}
        form={{ register, errors }}
        open={true}
      />
      <button
        type="submit"
        disabled={!isDirty}
        className={Styles["search-button"]}
      >
        Search
      </button>
    </form>
  );
};

export default Filter;
