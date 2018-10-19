import { Proxy } from "./Proxy";

export interface Development {
  /** 转发规则 */
  proxy?: Proxy;
  /** 服务器端口号 */
  port?: number;
}
