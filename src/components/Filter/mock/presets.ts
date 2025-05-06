// Types
import { TFilter, EFilterName, EFilterType } from "@/types/entities/filter";

// Mock
import { sortOptions, languageOptions } from "@/components/Filter/mock/options";

export const sortPreset: TFilter[] = [
  {
    id: "ff6c280e-3d7b-41ca-8075-214e4b8e0103",
    label: "Sort Results By",
    name: EFilterName.sort,
    type: EFilterType.select,
    initialValue: sortOptions[0].value,
  },
];

export const moviePreset: TFilter[] = [
  {
    id: "3a2fdeed-a53c-41d3-b9b0-9a2ab9505b47",
    label: "Genres",
    name: EFilterName.genres,
    type: EFilterType.picks,
    initialValue: [],
  },
  {
    id: "324157ed-1948-4c27-a4f5-20e28fb44abe",
    label: "Certification",
    name: EFilterName.certification,
    type: EFilterType.picks,
    initialValue: [],
  },
  {
    id: "a3f07a5c-002e-4f4e-bff3-c5ab7b22afff",
    label: "Language",
    name: EFilterName.language,
    type: EFilterType.select,
    initialValue: languageOptions[0].value,
  },
  {
    id: "f74ed83e-f734-4a6e-8a00-2bbbab39ba9e",
    label: "User Score",
    name: EFilterName["user-score"],
    type: EFilterType["range-double"],
    initialValue: [0, 100],
  },
  {
    id: "9b1fbcd2-2bcb-42e4-9426-6cfe4d35343c",
    label: "Minimum User Votes",
    name: EFilterName["min-vote"],
    type: EFilterType["range-single"],
    initialValue: 0,
  },
  {
    id: "21e708de-b359-41d7-814b-42b8c71cc405",
    label: "Runtime",
    name: EFilterName["runtime"],
    type: EFilterType["range-double"],
    initialValue: [0, 100],
  },
  {
    id: "5e9db5e6-70ec-464a-bc1f-d69007dda4b2",
    label: "Keywords",
    name: EFilterName["keywords"],
    type: EFilterType.text,
    initialValue: "",
  },
];

export const tvPreset: TFilter[] = [];
