"use client";

// Core
import { useForm } from "react-hook-form";
import { FC, useEffect } from "react";

// Components
import { FiltersSection } from "./components/FiltersSection";
// Styles
import Styles from "./styles/index.module.scss";
// Mock
import { moviePreset, sortPreset } from "./mock/presets";
import { IFormValues } from "./types/form";
// Store
import { useFilterStore } from "@/store/filterStore";


const Filter: FC = () => {
  const setFilters = useFilterStore((state) => state.setFilters)
  const filters = useFilterStore((state) => state.filters)
  const isHydrated = useFilterStore((state) => state.isHydrated)
  // const hasAppliedFilters = useFilterStore((state) => state.hasAppliedFilters)

  // console.log("Filter filters >> ", filters)
  // console.log("Filter isHydrated >> ", isHydrated)
  // console.log("Filter defaultValues >> ", filters)

  const {
    register,
    control,
    handleSubmit,
    formState: { errors, isDirty },
    reset,
    watch,
  } = useForm<IFormValues>({
    defaultValues: filters,
  });

  // Синхронизация формы с store при изменениях и после гидратации
  useEffect(() => {
    if (isHydrated) {
      reset(filters);
    }
  }, [filters, isHydrated, reset]);

  // console.log('form values after init >> ', getValues())
  // console.log('form isDirty after init >> ', isDirty)

  const onSubmit = (data: IFormValues) => {
    reset(data);
    setFilters(data)
  };

  // console.log('form values >> ',getValues())

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={Styles.filter}>
      {/* Debug info */}
      {/* <div style={{ 
        background: '#f5f5f5', 
        padding: '10px', 
        margin: '10px 0', 
        borderRadius: '4px',
        fontSize: '12px'
      }}>
        <h4>Debug Info:</h4>
        <div><strong>Store values:</strong> {JSON.stringify(filters, null, 2)}</div>
        <div><strong>Form values:</strong> {"getValues() removed for debugging"}</div>
        <div><strong>Form isDirty:</strong> {isDirty ? 'true' : 'false'}</div>
        <div><strong>Store isHydrated:</strong> {isHydrated ? 'true' : 'false'}</div>
        <div><strong>Form errors:</strong> {JSON.stringify(errors, null, 2)}</div>
      </div> */}

      <FiltersSection
        label="Sort"
        filters={sortPreset}
        form={{ register, errors, control, watch }}
        open={false}
      />
      <FiltersSection
        label="Filters"
        filters={moviePreset}
        form={{ register, errors, control, watch }}
        open={false}
      />
      <button
        type="submit"
        disabled={!isDirty}
        className={Styles["search-button"]}
      >
        Search
      </button>
      {/* <button
        type="button"
        onClick={() => reset(filters)}
        style={{ 
          marginLeft: '10px',
          padding: '8px 16px',
          background: '#f0f0f0',
          border: '1px solid #ccc',
          borderRadius: '4px',
          cursor: 'pointer'
        }}
      >
        Reset to Store Values
      </button>
      <button
        type="button"
        onClick={() => {
          // console.log('Force sync - Store values:', filters);
          // console.log('Force sync - Form values before:', getValues());
          reset(filters);
          // console.log('Force sync - Form values after:', getValues());
        }}
        style={{ 
          marginLeft: '10px',
          padding: '8px 16px',
          background: '#e0f0ff',
          border: '1px solid #007acc',
          borderRadius: '4px',
          cursor: 'pointer'
        }}
      >
        Force Sync
      </button> */}
    </form>
  );
};

export default Filter;
