import { IFormValues } from "@/components/Filter/types/form";
import { combinedPreset } from "@/components/Filter/mock/presets";
import { EFilterName, EFilterType } from "@/types";

export const getFiltersIntoQuery = (filters: IFormValues): string => {
  return Object.entries(filters)
    .filter(([key, value]) => {
      const type = combinedPreset.find((filter) => filter.name === +key)?.type;

      // console.log(
      //   EFilterName[key as keyof typeof EFilterName],
      //   value,
      //   EFilterType[type as keyof typeof EFilterType]
      // );

      // TODO: Select
      if (type === EFilterType["range-single"] && value === 0) return false;
      if (
        type === EFilterType["range-double"] &&
        (value as Array<number>)[0] === 0 &&
        (value as Array<number>)[1] === 100
      )
        return false;

      // TODO: Checkbox
      if (type === EFilterType.text && value === "") return false;

      // TODO: Dates
      if (type === EFilterType.picks && (value as Array<string>).length === 0)
        return false;

      return true;
    })
    .map(([key, value]) => {
      switch (+key) {
        case EFilterName.sort:
          return `sort_by=${value}`;
        case EFilterName.language:
          return `language=${value}`;
        default:
          return `${EFilterName[key as keyof typeof EFilterName]}=${value}`;
      }
    })
    .join("&");
};
