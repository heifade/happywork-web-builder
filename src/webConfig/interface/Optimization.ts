import { CacheGroupsOptions } from "./CacheGroupsOptions";

export interface Optimization {
  splitChunks: {
    cacheGroups: {
      [key: string]: CacheGroupsOptions;
    };
  };
}
