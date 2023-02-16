import { NewChangeset } from "@cosm-changesets/types";

export type RelevantChangesets = {
  major: NewChangeset[];
  minor: NewChangeset[];
  patch: NewChangeset[];
};
