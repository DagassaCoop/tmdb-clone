// Mock
import { languageOptions, sortOptions } from "@/components/Filter/mock/options";
// Types
import { EFilterName } from "@/types";

export function getFilterOptions(name: EFilterName) {
  switch (name) {
    case EFilterName.sort:
      return sortOptions;
    case EFilterName.language:
      return languageOptions;
    default:
      return [];
  }
}
