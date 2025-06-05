// Mock
import {
  languageOptions,
  minUserVotesOptions,
  runtimeOptions,
  sortOptions,
  userScoreOptions,
} from "@/components/Filter/mock/options";
// Types
import { EFilterName } from "@/types";

export function getFilterOptions(name: EFilterName) {
  switch (name) {
    case EFilterName.sort:
      return sortOptions;
    case EFilterName.language:
      return languageOptions;
    case EFilterName["min-vote"]:
      return minUserVotesOptions;
    case EFilterName["user-score"]:
      return userScoreOptions;
    case EFilterName.runtime:
      return runtimeOptions;
    default:
      return [];
  }
}
