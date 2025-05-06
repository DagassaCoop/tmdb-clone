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
import { TFilter, EFilterName } from "@/types";

interface Props {
  callback: (query: string) => void;
}

export interface FormValues {
  [key: string]: string | string[] | number | number[] | undefined;
}

const getInitialValues = (presets: TFilter[]) => {
  return presets.reduce((acc: FormValues, preset) => {
    acc[preset.name] = preset.initialValue;
    return acc;
  }, {});
};

// Не работает
// const getQueryString = (data: FormValues) => {
//   return Object.entries(data)
//     .filter(([key, value]) => {
//       console.log(key, value, key != EFilterName.sort, EFilterName.sort);
//       if (
//         key !== EFilterName.sort &&
//         value === moviePreset.find((p) => p.name == key)?.initialValue
//       )
//         return false;
//       return true;
//     })
//     .map(([key, value]) => {
//       console.log(key, value);
//       return `${EFilterName[key as keyof typeof EFilterName]}=${value}`;
//     })
//     .join("&");
// };

const Filter: FC<Props> = ({ callback }) => {
  const [currentValues, setCurrentValues] = useState<FormValues>({
    ...getInitialValues(sortPreset),
    ...getInitialValues(moviePreset),
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isDirty },
    reset,
  } = useForm<FormValues>({
    defaultValues: currentValues,
  });

  const onSubmit = (data: FormValues) => {
    console.log(data);
    setCurrentValues(data);
    reset(data);
    // callback(getQueryString(data));
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
