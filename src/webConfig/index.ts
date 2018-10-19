import { Build } from "./interface/Build";
import { Html } from "./interface/Html";
import { Development } from "./interface/Development";

export interface WebConfig {
  /** 入口配置 */
  entry: {
    [name: string]: string;
  };

  /** 开发模式配置 */
  development?: Development;

  /** 别名 */
  alias?: {
    [key: string]: string;
  };

  /** 页面 */
  html?: Html[];

  /** 构建时的配置 */
  build?: Build;
}
