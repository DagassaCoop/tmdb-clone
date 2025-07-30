// Types
import { TFilter, EFilterType } from "@/types/entities/filter";
import { TForm } from "@/components/Filter/types/form";

// Components
import { FilterPicks } from "@/components/Filter/components/FilterPicks/FilterPicks";
import { FilterSelect } from "@/components/Filter/components/FilterSelect/FilterSelect";
import { FilterRangeDouble } from "@/components/Filter/components/FilterRangeDouble/FilterRangeDouble";

// Helpers
import { getFilterOptions } from "@/helpers/getFilterOptions";
import { FilterRangeSingle } from "@/components/Filter/components/FilterRangeSingle/FilterRangeSingle";
import { getFilterSteps } from "../helpers/getFilterSteps";

export const useFilterComponent = (filter: TFilter, form: TForm) => {
  switch (filter.type) {
    case EFilterType.select:
      return (
        <>
          <FilterSelect
            filter={{
              ...filter,
              initialValue: filter.initialValue,
              options: getFilterOptions(filter.name),
            }}
            form={form}
          />
        </>
      );
    case EFilterType["range-single"]:
      return (
        <FilterRangeSingle
          filter={{ ...filter, options: getFilterOptions(filter.name) }}
          form={form}
          step={getFilterSteps(filter.name)}
        />
      );
    case EFilterType["range-double"]:
      return (
        <FilterRangeDouble
          filter={{ ...filter, options: getFilterOptions(filter.name) }}
          form={form}
          step={getFilterSteps(filter.name)}
        />
      );
    case EFilterType.checkbox:
      return <>Checkbox</>;
    case EFilterType.text:
      return <>Text</>;
    case EFilterType.dates:
      return <>Date</>;
    case EFilterType.picks:
      return <FilterPicks filter={filter} form={form} />;
    default:
      return null;
  }
};
