import { Optimization } from "./Optimization";

/** 构建有关配置 */
export interface Build {
  /** 是否生成sourceMap 默认:false*/
  sourceMap?: boolean;
  /** 是否压缩 默认:true */
  minimize?: boolean;
  /** 是否移除console 默认:false */
  dropConsole?: boolean;
  /** 构建优化配置， 主要用于控制拆分构建生成的文件 */
  optimization?: Optimization;
}
