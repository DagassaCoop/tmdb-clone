// Types
import { TFilter, EFilterType } from "@/types/entities/filter";
import { TForm } from "@/components/Filter/types/form";

// Components
import { FilterPicks } from "@/components/Filter/components/FilterPicks";

export const getFilterComponent = (filter: TFilter, form: TForm) => {
  switch (filter.type) {
    case EFilterType.select:
      return <>Select</>;
    case EFilterType["range-single"]:
      return <>Range Single</>;
    case EFilterType["range-double"]:
      return <>Range Double</>;
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
