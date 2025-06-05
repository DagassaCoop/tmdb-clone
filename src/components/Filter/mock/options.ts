// Types
import { TOption } from "@/components/Filter/types/option";

export const sortOptions: TOption[] = [
  {
    label: "Popularity Descending",
    value: "popularity.desc",
  },
  {
    label: "Popularity Ascending",
    value: "popularity.asc",
  },
];

export const languageOptions: TOption[] = [
  {
    label: "English",
    value: "en",
  },
];

export const minUserVotesOptions: TOption[] = [
  { value: 0, label: "0" },
  { value: 100, label: "100" },
  { value: 200, label: "200" },
  { value: 300, label: "300" },
  { value: 400, label: "400" },
  { value: 500, label: "500" },
];

export const userScoreOptions: TOption[] = [
  { value: 0, label: "0" },
  { value: 5, label: "5" },
  { value: 10, label: "10" },
];

export const runtimeOptions: TOption[] = [
  { value: 0, label: "0" },
  { value: 120, label: "120" },
  { value: 240, label: "240" },
  { value: 360, label: "360" },
  { value: 400, label: "" },
];
