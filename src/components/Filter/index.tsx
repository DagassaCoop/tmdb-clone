"use client";

// Core
import { useForm } from "react-hook-form";

// Components
import { FiltersSection } from "./components/FiltersSection";
// Styles
import Styles from "./styles/index.module.scss";
// Mock
import { moviePreset, sortPreset } from "./mock/presets";

const Filter = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isDirty },
  } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
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
      <button type="submit" disabled={!isDirty}>
        Search
      </button>
    </form>
  );
};

export default Filter;
