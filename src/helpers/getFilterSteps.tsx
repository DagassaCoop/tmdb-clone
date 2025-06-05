import { EFilterName } from "@/types";

export const getFilterSteps = (name: EFilterName) => {
  switch (name) {
    case EFilterName["user-score"]:
      return 1;
    case EFilterName["min-vote"]:
      return 50;
    case EFilterName.runtime:
      return 15;
    default:
      return 50;
  }
};
