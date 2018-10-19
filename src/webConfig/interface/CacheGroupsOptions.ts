export interface CacheGroupsOptions {
  /** Assign modules to a cache group */
  test?: ((...args: any[]) => boolean) | string | RegExp;
  /** Select chunks for determining cache group content (defaults to \"initial\", \"initial\" and \"all\" requires adding these chunks to the HTML) */
  chunks?: "initial" | "async" | "all" | ((chunk: any) => boolean);
  /** Ignore minimum size, minimum chunks and maximum requests and always create chunks for this cache group */
  enforce?: boolean;
  /** Priority of this cache group */
  priority?: number;
  /** Minimal size for the created chunk */
  minSize?: number;
  /** Minimum number of times a module has to be duplicated until it's considered for splitting */
  minChunks?: number;
  /** Maximum number of requests which are accepted for on-demand loading */
  maxAsyncRequests?: number;
  /** Maximum number of initial chunks which are accepted for an entry point */
  maxInitialRequests?: number;
  /** Try to reuse existing chunk (with name) when it has matching modules */
  reuseExistingChunk?: boolean;
  /** Give chunks created a name (chunks with equal name are merged) */
  name?: boolean | string | ((...args: any[]) => any);
}
